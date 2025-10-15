 /** 
  * Icon wrapper mapping design asset names to static asset URLs served from /assets.
  * This avoids bundler errors if SVG files are not present under src, and works with
  * Storybook staticDirs serving ../public. If a name has no asset, render a placeholder span.
  */
 // PUBLIC_INTERFACE
 import React from 'react';
 import PropTypes from 'prop-types';

 // Mapping of icon names to their static URLs in public/assets.
 // Note: These assets are expected in storybook_frontend/public/assets/
 const sources = {
   home: '/assets/figma_image_0_304.svg',
   export: '/assets/figma_image_0_247.svg',
   dollar: '/assets/figma_image_0_100.svg',
   correct: '/assets/figma_image_0_139.svg',
   check: '/assets/figma_image_0_141.svg',
 };

 // PUBLIC_INTERFACE
 export function Icon({ name, size = 24, color = 'currentColor', title, style, ...rest }) {
   const src = sources[name];
   if (src) {
     // We cannot apply 'fill' directly on <img>; color parameter is ignored for raster/SVG files.
     // Consumers should supply appropriately colored assets when needed.
     return (
       <img
         src={src}
         width={size}
         height={size}
         alt={title || name}
         style={{ display: 'inline-block', width: size, height: size, ...style }}
         {...rest}
       />
     );
   }
   // Fallback: render an empty box placeholder with the desired size.
   return <span aria-hidden="true" style={{ display: 'inline-block', width: size, height: size }} {...rest} />;
 }

 Icon.propTypes = {
   name: PropTypes.oneOf(Object.keys(sources)).isRequired,
   size: PropTypes.number,
   color: PropTypes.string,
   title: PropTypes.string,
   style: PropTypes.object,
 };

 export default Icon;
