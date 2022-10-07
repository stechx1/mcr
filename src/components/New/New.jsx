import { ProGallery } from 'pro-gallery';
import 'pro-gallery/dist/statics/main.css';
import { useEffect, useState } from 'react';

export function New() {
  let container;
  let scrollingElement;

  const items = [
    {
      itemId: '1',
      mediaUrl:
        '/images/bg.webp',
      metaData: {
        type: 'image',
        height: 200,
        width: 100,
        title: 'sample-title',
        description: 'sample-description',
        focalPoint: [0, 0],
      },
    },
    {
      itemId: '2',
      mediaUrl:
        '/images/img-1.webp',
      metaData: {
        type: 'image',
        height: 200,
        width: 100,
        title: 'sample-title',
        description: 'sample-description',
        focalPoint: [0, 0],
        link: {
          url: 'http://example.com',
          target: '_blank',
        },
      },
    },
    {
      itemId: '3',
      mediaUrl:
        '/images/img-2.webp',
      metaData: {
        type: 'image',
        height: 200,
        width: 100,
        title: 'sample-title',
        description: 'sample-description',
        focalPoint: [0, 0],
        link: {
          url: 'http://example.com',
          target: '_blank',
        },
      },
    },
    {
      itemId: '4',
      mediaUrl:
        '/images/company.webp',
      metaData: {
        type: 'image',
        height: 200,
        width: 100,
        title: 'sample-title',
        description: 'sample-description',
        focalPoint: [0, 0],
        link: {
          url: 'http://example.com',
          target: '_blank',
        },
      },
    },
  ];

  // The options of the gallery (from the playground current state)
  const options = {
    layoutParams: {
      structure: {
        galleryLayout: 4,
      },
    },
    behaviourParams: {
      item: {
        overlay: {
          position: 'CENTERED_HORIZONTALLY',
        },
        content: {
          hoverAnimation: 'ZOOM_IN',
        },
      },
    },
  };

  // The size of the gallery container. The images will fit themselves in it
  if (typeof window !== 'undefined') {
    container = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
    scrollingElement = window;
  }

  // The eventsListener will notify you anytime something has happened in the gallery.
  const eventsListener = (eventName, eventData) =>
    console.log({ eventName, eventData });

  // The scrollingElement is usually the window, if you are scrolling inside another element, suplly it here

  return (
    <ProGallery
      items={items}
      options={options}
      container={container}
      eventsListener={eventsListener}
      scrollingElement={scrollingElement}
    />
  );
}
