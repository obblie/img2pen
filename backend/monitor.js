#!/usr/bin/env node

import axios from 'axios';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

const BACKEND_URL = process.env.BACKEND_URL || 'https://img2pen-backend.onrender.com';
const CHECK_INTERVAL = 30000; // 30 seconds

class BackendMonitor {
    constructor() {
        this.isRunning = false;
        this.lastStatus = null;
        this.errorCount = 0;
        this.successCount = 0;
    }

    async checkHealth() {
        try {
            const response = await axios.get(`${BACKEND_URL}/health`, { timeout: 10000 });
            const status = response.data;
            
            this.successCount++;
            this.errorCount = 0; // Reset error count on success
            
            console.log(`✅ [${new Date().toISOString()}] Backend is healthy`);
            console.log(`   Status: ${status.status}`);
            console.log(`   Repo: ${status.config.repo}`);
            console.log(`   Branch: ${status.config.branch}`);
            console.log(`   Path: ${status.config.path}`);
            console.log(`   Token: ${status.config.hasToken ? 'Present' : 'Missing'}`);
            console.log(`   Success count: ${this.successCount}`);
            
            this.lastStatus = status;
            return true;
            
        } catch (error) {
            this.errorCount++;
            console.error(`❌ [${new Date().toISOString()}] Backend health check failed`);
            console.error(`   Error: ${error.message}`);
            console.error(`   Error count: ${this.errorCount}`);
            
            if (error.response) {
                console.error(`   Status: ${error.response.status}`);
                console.error(`   Data: ${JSON.stringify(error.response.data)}`);
            }
            
            return false;
        }
    }

    async checkRecentCommits() {
        try {
            const { stdout } = await execAsync('git log --oneline -10 --grep="Order from"');
            const commits = stdout.trim().split('\n').filter(line => line.trim());
            
            if (commits.length > 0) {
                console.log(`📋 Recent order commits (last 10):`);
                commits.forEach(commit => {
                    console.log(`   ${commit}`);
                });
            } else {
                console.log(`📋 No recent order commits found`);
            }
            
        } catch (error) {
            console.error(`❌ Failed to check recent commits: ${error.message}`);
        }
    }

    async checkModelsDirectory() {
        try {
            const { stdout } = await execAsync('ls -la models/ | tail -10');
            console.log(`📁 Recent files in models directory:`);
            console.log(stdout);
            
        } catch (error) {
            console.error(`❌ Failed to check models directory: ${error.message}`);
        }
    }

    async testSubmitOrder() {
        try {
            console.log(`🧪 Testing submit-order endpoint...`);
            
            // Create a simple test STL content
            const testSTL = `solid test
facet normal 0 0 1
  outer loop
    vertex 0 0 0
    vertex 1 0 0
    vertex 0 1 0
  endloop
endfacet
endsolid test`;
            
            const formData = new FormData();
            formData.append('name', 'Test User');
            formData.append('email', 'test@example.com');
            formData.append('file', new Blob([testSTL], { type: 'text/plain' }), 'test.stl');
            
            const response = await axios.post(`${BACKEND_URL}/api/submit-order`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                timeout: 30000
            });
            
            console.log(`✅ Test order submitted successfully`);
            console.log(`   GUID: ${response.data.guid}`);
            console.log(`   Filename: ${response.data.filename}`);
            console.log(`   Commit SHA: ${response.data.commitSha}`);
            
            return true;
            
        } catch (error) {
            console.error(`❌ Test order submission failed: ${error.message}`);
            if (error.response) {
                console.error(`   Status: ${error.response.status}`);
                console.error(`   Data: ${JSON.stringify(error.response.data)}`);
            }
            return false;
        }
    }

    async runFullCheck() {
        console.log(`\n${'='.repeat(60)}`);
        console.log(`🔍 Running full backend monitoring check`);
        console.log(`${'='.repeat(60)}`);
        
        // Health check
        const isHealthy = await this.checkHealth();
        
        if (isHealthy) {
            // Check recent activity
            await this.checkRecentCommits();
            await this.checkModelsDirectory();
        }
        
        console.log(`${'='.repeat(60)}\n`);
        
        return isHealthy;
    }

    async runTestSubmission() {
        console.log(`\n${'='.repeat(60)}`);
        console.log(`🧪 Running test submission`);
        console.log(`${'='.repeat(60)}`);
        
        const success = await this.testSubmitOrder();
        
        if (success) {
            console.log(`✅ Test submission completed successfully`);
            await this.checkRecentCommits();
            await this.checkModelsDirectory();
        }
        
        console.log(`${'='.repeat(60)}\n`);
        
        return success;
    }

    start() {
        if (this.isRunning) {
            console.log('Monitor is already running');
            return;
        }
        
        this.isRunning = true;
        console.log(`🚀 Starting backend monitor for ${BACKEND_URL}`);
        console.log(`📊 Check interval: ${CHECK_INTERVAL / 1000} seconds`);
        
        // Initial check
        this.runFullCheck();
        
        // Set up periodic checks
        this.interval = setInterval(() => {
            this.runFullCheck();
        }, CHECK_INTERVAL);
    }

    stop() {
        if (!this.isRunning) {
            console.log('Monitor is not running');
            return;
        }
        
        this.isRunning = false;
        if (this.interval) {
            clearInterval(this.interval);
        }
        console.log('🛑 Backend monitor stopped');
    }
}

// CLI interface
const monitor = new BackendMonitor();

const command = process.argv[2];

switch (command) {
    case 'start':
        monitor.start();
        break;
    case 'check':
        monitor.runFullCheck().then(() => process.exit(0));
        break;
    case 'test':
        monitor.runTestSubmission().then(() => process.exit(0));
        break;
    case 'help':
    default:
        console.log(`
Backend Monitor Usage:

  node monitor.js start    - Start continuous monitoring
  node monitor.js check    - Run a single health check
  node monitor.js test     - Test submit-order endpoint
  node monitor.js help     - Show this help

Environment Variables:
  BACKEND_URL             - Backend URL (default: https://img2pen-backend.onrender.com)

Examples:
  node monitor.js check
  BACKEND_URL=http://localhost:3001 node monitor.js test
        `);
        break;
}

// Handle graceful shutdown
process.on('SIGINT', () => {
    console.log('\n🛑 Received SIGINT, shutting down gracefully...');
    monitor.stop();
    process.exit(0);
});

process.on('SIGTERM', () => {
    console.log('\n🛑 Received SIGTERM, shutting down gracefully...');
    monitor.stop();
    process.exit(0);
}); 