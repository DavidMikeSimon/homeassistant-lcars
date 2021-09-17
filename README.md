# LCARS Home Assistant Dashboard

Based on [william57m/homeassistant-dashboard](https://github.com/william57m/homeassistant-dashboard).

## Getting started

Install

```bash
npm run install
```

Run a development server

```
npm run start
```

Add the following entry to your `configuration.yaml` file:

```yaml
panel_custom:
  - name: lcars-panel
    sidebar_title: LCARS Panel
    sidebar_icon: mdi:react
    url_path: lcars-panel-dev
    js_url: http://host:port/main.js
    embed_iframe: true
    config:
      name: World
```

Restart Home Assistant.

## Deploy

To deploy it, you need to make a build

```bash
npm run build
```

This will generate a new build of the panel in the `dist` folder. Copy the content of this folder and place it in `<home assistant config>/www/lcars-panel`.

This will make it available from Home Assistant via the url `/local/lcars-panel/main.js`.

We then have to configure Home Assitant to use it:

```yaml
panel_custom:
  - name: lcars-panel
    sidebar_title: LCARS Panel
    sidebar_icon: mdi:react
    url_path: lcars-panel-prod
    js_url: /local/lcars-panel/main.js
    embed_iframe: true
    config:
      name: World
```
