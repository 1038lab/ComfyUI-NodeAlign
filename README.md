# ComfyUI-NodeAlign

**ComfyUI-NodeAlign** is a lightweight alignment toolbar for ComfyUI graphs. It provides quick alignment, equal size, and distribution actions, with optional keyboard shortcuts, designed for simplicity and ease of use.

![NodeAlign](https://github.com/user-attachments/assets/4326c991-ed21-446a-8801-5078298106c1)

## Features
* **Toolbar Customization**: Change the position, size, and visibility of the alignment toolbar.
* **Node Alignment**: Align selected nodes horizontally or vertically.
* **Equalize Node Dimensions**: Equalize the width and/or height of selected nodes.
* **Distribute Nodes**: Distribute nodes horizontally or vertically with custom gaps.
* **Toolbar Dragging**: Drag and position the toolbar anywhere on the screen.
* **Floating/Attached Mode**: Toggle between floating and attaching the toolbar to the menu.
* **Keyboard Shortcuts**: Use the `Shift + WASD` keys to quickly align nodes (Up, Left, Down, Right).
* **Customizable Colors and Opacity**: Modify the toolbar’s background color, opacity, and icon colors.

## Compatibility
- Tested with ComfyUI v3.7.3 front-end.
- If the toolbar fails to show, hard refresh with cache disabled and check console for `[NodeAlign.Settings] loaded` and `[NodeAlign] init`.

## Installation

To install **ComfyUI-NodeAlign**, follow these steps:

1. **Clone or download** the repository.
2. Place the add-on in the ComfyUI `extensions` directory.
3. Restart ComfyUI.

Example:

```bash
git clone https://github.com/1038lab/ComfyUI-NodeAlign.git
```

## Configuration

### Available Settings

The add-on allows you to customize the behavior and appearance of the Node Alignment toolbar. Here are the available settings:

* **Node Alignment Toolbar Display Mode**:

  * `Permanent`: Always visible.
  * `On-Select`: Display only when a node is selected.
  * `Disabled`: Toolbar is hidden.

* **Enable Quick Alignment Shortcuts**:

  * `Shift + W`: Align top.
  * `Shift + A`: Align left.
  * `Shift + S`: Align bottom.
  * `Shift + D`: Align right.

* **Toolbar Position Mode**:

  * `Always`: Toolbar floats above the OEM bar (default).
  * `Attached`: Toolbar attaches to the OEM bar.
  * `Floating`: Toolbar is free-floating.

* **Toolbar Button Size**: Adjust the size of toolbar buttons (default: 25px).
* **Always Reset Toolbar Position on Load**: If enabled, the toolbar resets to its default position on each load.
* **Toolbar Background Opacity**: Adjust the opacity of the toolbar background (range 0-100).
* **Toolbar Background Color**: Set the background color of the toolbar using hex codes (default: `#1b1b1b`).
* **Icon Background Color**: Set the background color of the icons in the toolbar (default: `#2a2a2a`).
* **Icon Color**: Adjust the color of the icons in the toolbar (default: `#e0e0e0`).
* **Divider Color**: Set the color of dividers between toolbar icons (default: `#666666`).

### Example Configuration

To achieve a minimalistic design for your toolbar:

* **Node Alignment Toolbar Display Mode**: `Permanent`
* **Enable Quick Alignment Shortcuts**: `True`
* **Toolbar Position Mode**: `Floating`
* **Toolbar Button Size**: `20px`
* **Toolbar Background Color**: `#1C1C1C`
* **Toolbar Background Opacity**: `90`
* **Icon Background Color**: `#363636`
* **Icon Color**: `#FFFFFF`
* **Divider Color**: `#00FF55`

This setup will provide a floating, compact toolbar with a dark background, light icons, and visible dividers.

## Usage

Once installed, you will have a new toolbar for **NodeAlign**. You can use the toolbar to align and distribute selected nodes.

### Node Alignment Actions:

* **Align Left**: Align all selected nodes to the leftmost position.
* **Align Center (Horizontal)**: Center selected nodes horizontally.
* **Align Right**: Align all selected nodes to the rightmost position.
* **Align Top**: Align all selected nodes to the topmost position.
* **Align Center (Vertical)**: Center selected nodes vertically.
* **Align Bottom**: Align all selected nodes to the bottommost position.

### Equalize Node Dimensions:

* **Equal Width**: Equalize the width of all selected nodes.
* **Equal Height**: Equalize the height of all selected nodes.

### Distribute Nodes:

* **Horizontal Distribution**: Evenly distribute selected nodes along the X-axis.
* **Vertical Distribution**: Evenly distribute selected nodes along the Y-axis.

### Drag and Position the Toolbar:

* **Floating Mode**: Drag the toolbar anywhere on the screen.
* **Attached Mode**: Attach the toolbar to the top or bottom of the menu bar.

## Troubleshooting

If the toolbar is not appearing or not behaving as expected:

* Ensure the add-on is installed in the correct `extensions` directory.
* Make sure your ComfyUI version is compatible with this add-on.
* Try resetting the toolbar position (double-click on the toolbar) to restore the default layout.

## Credits & Background
- Based on the original NodeAligner by Tenney95 (https://github.com/Tenney95/ComfyUI-NodeAligner)
- Also inspired by kk8bit/kaytool (https://github.com/kk8bit/kaytool)
- This repo exists because the original versions were not updated for newer ComfyUI (e.g., v3.7.3) and the toolbar stopped working; this repo provides a compatible, maintained implementation.

## License

GPL-3.0 License
