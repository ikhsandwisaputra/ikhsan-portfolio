import React from 'react';

/**
 * Error boundary that prevents a crash inside the dithering Canvas
 * from taking down the rest of the About Me section.
 *
 * In dev it shows the error message in the slot so we can debug.
 * In prod it just shows nothing (graceful fallback).
 */
export default class DitheringErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    // eslint-disable-next-line no-console
    console.error('[DitheringCat] crashed:', error, info);
  }

  render() {
    if (this.state.error) {
      const isDev = import.meta.env.DEV;
      return (
        <div
          className={this.props.className}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ff6b6b',
            fontSize: '0.75rem',
            textAlign: 'center',
            padding: '1rem',
            background: 'rgba(0,0,0,0.2)',
          }}
        >
          {isDev ? `3D failed: ${String(this.state.error.message || this.state.error)}` : null}
        </div>
      );
    }
    return this.props.children;
  }
}
