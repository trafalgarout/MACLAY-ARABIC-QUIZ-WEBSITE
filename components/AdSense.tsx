"use client";

interface AdSenseProps {
  slot: string;
  className?: string;
}

const adCodes = {
  "1": {
    slot: "7352451765",
    code: `
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6865939387108271" crossorigin="anonymous"></script>
      <ins class="adsbygoogle"
           style="display:block"
           data-ad-client="ca-pub-6865939387108271"
           data-ad-slot="7352451765"
           data-ad-format="auto"
           data-full-width-responsive="true"></ins>
    `
  },
  "2": {
    slot: "8056009400",
    code: `
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6865939387108271" crossorigin="anonymous"></script>
      <ins class="adsbygoogle"
           style="display:block"
           data-ad-client="ca-pub-6865939387108271"
           data-ad-slot="8056009400"
           data-ad-format="auto"
           data-full-width-responsive="true"></ins>
    `
  },
  "3": {
    slot: "3281344818",
    code: `
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6865939387108271" crossorigin="anonymous"></script>
      <ins class="adsbygoogle"
           style="display:block"
           data-ad-client="ca-pub-6865939387108271"
           data-ad-slot="3281344818"
           data-ad-format="auto"
           data-full-width-responsive="true"></ins>
    `
  },
  "4": {
    slot: "4240646223",
    code: `
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6865939387108271" crossorigin="anonymous"></script>
      <ins class="adsbygoogle"
           style="display:block"
           data-ad-client="ca-pub-6865939387108271"
           data-ad-slot="4240646223"
           data-ad-format="auto"
           data-full-width-responsive="true"></ins>
    `
  },
  "5": {
    slot: "2927564558",
    code: `
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6865939387108271" crossorigin="anonymous"></script>
      <ins class="adsbygoogle"
           style="display:block"
           data-ad-client="ca-pub-6865939387108271"
           data-ad-slot="2927564558"
           data-ad-format="auto"
           data-full-width-responsive="true"></ins>
    `
  },
  "6": {
    slot: "8342099801",
    code: `
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6865939387108271" crossorigin="anonymous"></script>
      <ins class="adsbygoogle"
           style="display:block"
           data-ad-client="ca-pub-6865939387108271"
           data-ad-slot="8342099801"
           data-ad-format="auto"
           data-full-width-responsive="true"></ins>
    `
  }
};

export default function AdSense({ slot, className = "" }: AdSenseProps) {
  const adData = adCodes[slot as keyof typeof adCodes];
  
  if (!adData) {
    console.error("Invalid AdSense slot:", slot);
    return null;
  }

  return (
    <div className={`my-6 flex justify-center ${className}`}>
      <div className="w-full max-w-4xl">
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6865939387108271" crossOrigin="anonymous"></script>
        <ins 
          className="adsbygoogle block"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-6865939387108271"
          data-ad-slot={adData.slot}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
        <script>
          {`(adsbygoogle = window.adsbygoogle || []).push({});`}
        </script>
      </div>
    </div>
  );
}