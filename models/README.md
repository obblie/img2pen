# 3D Models Storage

This folder contains STL files generated from user orders through the Metal Memories pendant designer.

## File Naming Convention

Files are named with the following pattern:
```YYYY-MM-DDTHH-MM-SS-sssZ-{GUID}.stl
```

Where:
- `YYYY-MM-DDTHH-MM-SS-sssZ` is the timestamp when the order was submitted
- `{GUID}` is a unique identifier for the order

## File Contents

Each STL file contains:
- The 3D pendant geometry with the user's image embossed
- The jumpring (if selected)
- Any engraving text (if added)

## Order Information

The commit message for each file contains:
- Customer name and email
- Order timestamp
- Unique GUID for tracking

## Usage

These files can be:
1. Downloaded and 3D printed directly
2. Imported into CAD software for further processing
3. Used for manufacturing quotes and production planning

## File Size Limits

- Maximum file size: 50MB per STL file
- Files are automatically uploaded via the backend API when users submit orders 