import React, { useEffect } from 'react';

export default function AdSense({ clientId, slotId, style = {}, format = 'auto' }) {
  useEffect(() => {
    if (window) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error("AdSense ad load error:", e);
      }
    }
  }, [clientId, slotId]);

  return (
    <div className="flex justify-center my-6 " style={{ width: '100%' }}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', width: '100%', maxWidth: '728px', height: '90px', ...style }}
        data-ad-client={clientId}
        data-ad-slot={slotId}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}
