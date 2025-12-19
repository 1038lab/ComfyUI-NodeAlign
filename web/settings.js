import { app } from "../../scripts/app.js";

const nodeAlignSettings = [
    {
        id: "NodeAlign.NodeAlignDisplayMode",
        name: "Node Alignment Toolbar Display Mode",
        type: "combo",
        options: [
            { value: "permanent", text: "Permanent" },
            { value: "on-select", text: "Show on Node Selection" },
            { value: "disabled", text: "Disabled" }
        ],
        defaultValue: "permanent",
        category: ["☲ NodeAlign", "NodeAlignment", "DisplayMode"],
        onChange: (value) => {
            if (window.KayNodeAlignmentManager) {
                window.KayNodeAlignmentManager.updateDisplayMode(value);
            }
            if (window.NodeAlignFull) {
                window.NodeAlignFull.updateDisplay();
            }
        }
    },
    // Remember position: now always on (no toggle)
    {
        id: "NodeAlign.EnableAlignmentShortcuts",
        name: "Enable Shift+WASD for Quick Alignment (Up/Left/Down/Right)",
        type: "boolean",
        defaultValue: true,
        category: ["☲ NodeAlign", "NodeAlignment", "Shortcuts"],
        tooltip: "Quick align shortcut \nShift+W (Up ↑) \nShift+A (Left ←) \nShift+S (Down ↓) \nShift+D (Right →) \nalign selected nodes."
    },
    {
        id: "NodeAlign.AlwaysOnTopMode",
        name: "Toolbar Position Mode",
        type: "combo",
        options: [
            { value: "always", text: "Float Above OEM (default)" },
            { value: "attached", text: "Attach to OEM Bar" },
            { value: "floating", text: "Free Float (normal z-index)" }
        ],
        defaultValue: "always",
        category: ["☲ NodeAlign", "NodeAlignment", "Behavior"],
        tooltip: "Choose how the toolbar sits: always above OEM (high z-index), attached to the OEM bar, or free-floating at normal z-index.",
        onChange: () => {
            if (window.NodeAlignFull?.applyAlwaysOnTop) window.NodeAlignFull.applyAlwaysOnTop();
        }
    },
    {
        id: "NodeAlign.ButtonSize",
        name: "Toolbar Button Size (px)",
        type: "slider",
        defaultValue: 25,
        attrs: { min: 18, max: 48, step: 1 },
        category: ["☲ NodeAlign", "NodeAlignment", "Layout"],
        onChange: () => {
            if (window.NodeAlignFull) window.NodeAlignFull.applyLayoutSettings();
        }
    },
    {
        id: "NodeAlign.ResetPositionOnLoad",
        name: "Always Reset Toolbar Position on Load",
        type: "boolean",
        defaultValue: false,
        category: ["☲ NodeAlign", "NodeAlignment", "Behavior"],
        tooltip: "If enabled, the toolbar position resets to default on each load instead of restoring the last position."
    },
    {
        id: "NodeAlign.NodeAlignBackgroundOpacity",
        name: "Node Alignment Toolbar Background Opacity",
        type: "slider",
        defaultValue: 0,
        attrs: { min: 0, max: 100, step: 1 },
        category: ["☲ NodeAlign", "NodeAlignment", "BackgroundOpacity"],
        onChange: (newVal) => {
            const ids = ['kay-node-alignment-toolbar', 'nodealign-full-toolbar'];
            const bgColor = app.ui.settings.getSettingValue("NodeAlign.NodeAlignBackgroundColor") || "000000";
            const opacity = newVal / 100;
            ids.forEach(id => {
                const toolbar = document.getElementById(id);
                if (toolbar) {
                    toolbar.style.background = `rgba(${parseInt(bgColor.substr(0, 2), 16)}, ${parseInt(bgColor.substr(2, 2), 16)}, ${parseInt(bgColor.substr(4, 2), 16)}, ${opacity})`;
                }
            });
        }
    },
    {
        id: "NodeAlign.NodeAlignBackgroundColor",
        name: "Node Alignment Toolbar Background Color",
        type: "color",
        defaultValue: "000000",
        category: ["☲ NodeAlign", "NodeAlignment", "BackgroundColor"],
        onChange: (newVal) => {
            const ids = ['kay-node-alignment-toolbar', 'nodealign-full-toolbar'];
            if (!newVal) return;
            const opacity = app.ui.settings.getSettingValue("NodeAlign.NodeAlignBackgroundOpacity") / 100;
            ids.forEach(id => {
                const toolbar = document.getElementById(id);
                if (toolbar) {
                    toolbar.style.background = `rgba(${parseInt(newVal.substr(0, 2), 16)}, ${parseInt(newVal.substr(2, 2), 16)}, ${parseInt(newVal.substr(4, 2), 16)}, ${opacity})`;
                }
            });
        }
    },
    {
        id: "NodeAlign.NodeAlignIconBackgroundColor",
        name: "Node Alignment Icon Background Color",
        type: "color",
        defaultValue: "363636",
        category: ["☲ NodeAlign", "NodeAlignment", "IconBackgroundColor"],
        tooltip: "Use parameter “363636” to match ComfyUI menu bar color for an icon-free background effect",
        onChange: (newVal) => {
            const buttons = document.querySelectorAll('.kay-align-button, .nodealign-btn');
            buttons.forEach(btn => btn.style.backgroundColor = `#${newVal}`);
            const toolbar = document.getElementById('nodealign-full-toolbar');
            if (toolbar) toolbar.style.setProperty('--nodealign-icon-bg', `#${newVal}`);
        }
    },
    {
        id: "NodeAlign.NodeAlignIconColor",
        name: "Node Alignment Icon Color",
        type: "color",
        defaultValue: "999999",
        category: ["☲ NodeAlign", "NodeAlignment", "IconColor"],
        onChange: (newVal) => {
            const buttons = document.querySelectorAll('.kay-align-button, .nodealign-btn');
            buttons.forEach(btn => {
                const svg = btn.querySelector('svg');
                if (svg) svg.querySelectorAll('path').forEach(path => path.setAttribute('fill', `#${newVal}`));
            });
        }
    },
    {
        id: "NodeAlign.NodeAlignDividerColor",
        name: "Node Alignment Divider Color",
        type: "color",
        defaultValue: "00ff55",
        category: ["☲ NodeAlign", "NodeAlignment", "DividerColor"],
        onChange: (newVal) => {
            const dividers = document.querySelectorAll('.kay-toolbar-divider, .nodealign-divider, #nodealign-insert-indicator');
            dividers.forEach(divider => divider.style.background = `#${newVal}`);
        }
    }
];

app.registerExtension({
    name: "NodeAlign.Settings",
    settings: nodeAlignSettings,
    setup() {
        // Legacy bridge to ensure visibility in older UI builds
        if (app.ui?.settings?.addSetting) {
            nodeAlignSettings.forEach((setting) => {
                try { app.ui.settings.addSetting(setting); } catch (err) {}
            });
        }
        console.info("[NodeAlign.Settings] registered", nodeAlignSettings.map(s => s.id));
    }
});
