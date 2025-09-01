<script lang="ts">
  export let className = '';
</script>

<div class={`celestial-footer ${className}`.trim()} aria-hidden="true" role="presentation">
  <svg
    class="celestial-svg"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1600 900"
    preserveAspectRatio="xMidYMid slice"
  >
    <title>Milkshake UI Celestial Canvas</title>
    <desc>
      Animated aurora inspired by Milkshake UI, driven by active theme colors and anchored to the footer.
    </desc>
    <defs>
      <radialGradient id="milkshake-bg" cx="800" cy="420" r="920" gradientUnits="userSpaceOnUse">
        <stop offset="0%" class="stop-highlight" stop-color="var(--aurora-highlight)" />
        <stop offset="42%" class="stop-highlight-mid" stop-color="var(--aurora-highlight-mid)" />
        <stop offset="78%" class="stop-caramel" stop-color="var(--aurora-caramel)" />
        <stop offset="100%" class="stop-ink" stop-color="var(--aurora-midnight)" stop-opacity="0.65" />
      </radialGradient>

      <radialGradient id="halo" cx="800" cy="360" r="640" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stop-color="var(--aurora-halo)" stop-opacity="0.32" />
        <stop offset="45%" stop-color="var(--aurora-caramel-light)" stop-opacity="0.18" />
        <stop offset="100%" stop-color="var(--aurora-halo-edge)" stop-opacity="0" />
      </radialGradient>

      <linearGradient id="aurora-warm" x1="220" y1="160" x2="1520" y2="920" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stop-color="var(--aurora-highlight)" stop-opacity="0.95" />
        <stop offset="20%" stop-color="var(--aurora-caramel-light)" stop-opacity="0.9" />
        <stop offset="60%" stop-color="var(--aurora-caramel)" stop-opacity="0.86" />
        <stop offset="100%" stop-color="var(--aurora-caramel-deep)" stop-opacity="0.8" />
        <animateTransform
          attributeName="gradientTransform"
          type="rotate"
          from="0 800 450"
          to="360 800 450"
          dur="48s"
          repeatCount="indefinite"
        />
      </linearGradient>

      <linearGradient id="aurora-cool" x1="-160" y1="220" x2="1360" y2="880" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stop-color="var(--aurora-ice)" stop-opacity="0.82" />
        <stop offset="35%" stop-color="var(--aurora-ice-mid)" stop-opacity="0.72" />
        <stop offset="70%" stop-color="var(--aurora-ice-bright)" stop-opacity="0.7" />
        <stop offset="100%" stop-color="var(--aurora-ice-deep)" stop-opacity="0.6" />
        <animateTransform
          attributeName="gradientTransform"
          type="rotate"
          from="0 800 420"
          to="-360 800 420"
          dur="52s"
          repeatCount="indefinite"
        />
      </linearGradient>

      <radialGradient id="orb-warm" cx="50%" cy="40%" r="60%">
        <stop offset="0%" stop-color="var(--aurora-orb-warm-core)" stop-opacity="0.92" />
        <stop offset="40%" stop-color="var(--aurora-caramel-light)" stop-opacity="0.75" />
        <stop offset="100%" stop-color="var(--aurora-caramel)" stop-opacity="0" />
      </radialGradient>

      <radialGradient id="orb-cool" cx="40%" cy="45%" r="65%">
        <stop offset="0%" stop-color="var(--aurora-orb-cool-core)" stop-opacity="0.9" />
        <stop offset="50%" stop-color="var(--aurora-ice-bright)" stop-opacity="0.7" />
        <stop offset="100%" stop-color="var(--aurora-ice-deep)" stop-opacity="0" />
      </radialGradient>

      <linearGradient id="grid-stroke" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="var(--aurora-grid-light)" stop-opacity="0.38" />
        <stop offset="100%" stop-color="var(--aurora-ice-bright)" stop-opacity="0.18" />
      </linearGradient>

      <filter id="softGlow" x="-20%" y="-30%" width="140%" height="180%">
        <feGaussianBlur stdDeviation="60" result="blur" />
        <feColorMatrix
          in="blur"
          type="matrix"
          values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.55 0"
          result="soft"
        />
        <feBlend in="SourceGraphic" in2="soft" mode="screen" />
      </filter>

      <filter id="orbGlow" x="-100%" y="-100%" width="300%" height="300%">
        <feGaussianBlur stdDeviation="80" result="orbBlur" />
        <feColorMatrix
          in="orbBlur"
          type="matrix"
          values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.35 0"
        />
      </filter>

      <filter id="grainTexture">
        <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" seed="11" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.92  0 0 0 0 0.8  0 0 0 0 0.7  0 0 0 0.18 0"
        />
      </filter>
    </defs>

    <rect width="1600" height="900" fill="url(#milkshake-bg)" />
    <ellipse cx="820" cy="420" rx="720" ry="360" fill="url(#halo)" opacity="0.4" />

    <g filter="url(#softGlow)">
      <g class="animated float-slow">
        <path
          class="aurora"
          fill="url(#aurora-warm)"
          d="M -200 720 C 220 520 450 260 840 360 C 1180 450 1420 640 1820 520 L 1820 920 L -200 920 Z"
        >
          <animate
            attributeName="d"
            dur="18s"
            repeatCount="indefinite"
            values="M -200 720 C 220 520 450 260 840 360 C 1180 450 1420 640 1820 520 L 1820 920 L -200 920 Z;M -220 700 C 200 530 470 300 880 330 C 1280 360 1500 620 1840 560 L 1840 920 L -220 920 Z;M -180 740 C 260 540 520 320 840 400 C 1200 480 1380 700 1800 540 L 1800 920 L -180 920 Z;M -200 720 C 220 520 450 260 840 360 C 1180 450 1420 640 1820 520 L 1820 920 L -200 920 Z"
          />
        </path>
      </g>

      <g class="animated">
        <path
          class="aurora aurora--cool"
          fill="url(#aurora-cool)"
          d="M -120 680 C 200 580 520 380 940 420 C 1260 450 1500 590 1780 520 L 1780 920 L -120 920 Z"
        >
          <animate
            attributeName="d"
            dur="24s"
            repeatCount="indefinite"
            values="M -120 680 C 200 580 520 380 940 420 C 1260 450 1500 590 1780 520 L 1780 920 L -120 920 Z;M -160 640 C 240 520 540 360 960 400 C 1300 440 1560 620 1820 580 L 1820 920 L -160 920 Z;M -80 700 C 220 600 520 420 900 440 C 1180 460 1460 580 1760 520 L 1760 920 L -80 920 Z;M -120 680 C 200 580 520 380 940 420 C 1260 450 1500 590 1780 520 L 1780 920 L -120 920 Z"
          />
        </path>
      </g>
    </g>

    <g filter="url(#orbGlow)">
      <circle class="orb pulse" cx="360" cy="320" r="140" fill="url(#orb-warm)">
        <animate attributeName="r" dur="16s" values="120;150;132;120" repeatCount="indefinite" />
        <animateTransform
          attributeName="transform"
          type="translate"
          dur="18s"
          values="0 0; 14 -22; -10 12; 0 0"
          repeatCount="indefinite"
        />
      </circle>

      <circle class="orb pulse fast" cx="1180" cy="420" r="120" fill="url(#orb-cool)" opacity="0.9">
        <animate attributeName="r" dur="12s" values="110;140;108;110" repeatCount="indefinite" />
        <animateTransform
          attributeName="transform"
          type="translate"
          dur="16s"
          values="0 0; -18 20; 12 -16; 0 0"
          repeatCount="indefinite"
        />
      </circle>
    </g>

    <g opacity="0.22">
      <path
        class="animated-line"
        d="M 200 780 C 480 760 720 640 960 560 C 1200 480 1380 420 1600 440"
        fill="none"
        stroke="url(#grid-stroke)"
        stroke-width="3"
        stroke-linecap="round"
      />
      <path
        class="animated-line faster"
        d="M -40 640 C 280 580 560 520 860 520 C 1120 520 1320 560 1520 640"
        fill="none"
        stroke="url(#grid-stroke)"
        stroke-width="2.5"
        stroke-linecap="round"
      />
      <path
        class="animated-line slower"
        d="M 60 500 C 320 480 600 400 860 420 C 1100 440 1360 520 1680 500"
        fill="none"
        stroke="url(#grid-stroke)"
        stroke-width="2"
        stroke-linecap="round"
      />
    </g>

    <g opacity="0.3">
      <circle class="pulse" cx="780" cy="600" r="54" fill="none" stroke="var(--aurora-grid-light)" stroke-width="2" />
      <circle class="pulse fast" cx="940" cy="260" r="42" fill="none" stroke="var(--aurora-ice-bright)" stroke-width="2" />
    </g>

    <g opacity="0.25">
      <circle class="sparkle" cx="520" cy="720" r="6" fill="var(--aurora-sparkle)" />
      <circle class="sparkle" cx="580" cy="640" r="4" fill="var(--aurora-glow)" />
      <circle class="sparkle" cx="980" cy="700" r="5" fill="var(--aurora-ice-bright)" />
      <circle class="sparkle" cx="1260" cy="620" r="7" fill="var(--aurora-caramel-light)" />
      <circle class="sparkle" cx="1380" cy="540" r="4" fill="var(--aurora-success)" />
    </g>

    <rect width="1600" height="900" filter="url(#grainTexture)" opacity="0.22" />
  </svg>
</div>

<style>
  .celestial-footer {
    position: fixed;
    inset: auto 0 0 0;
    width: 100%;
    height: min(68vh, 680px);
    pointer-events: none;
    z-index: -1;
    overflow: hidden;
  }

  .celestial-footer::before {
    content: '';
    position: absolute;
    inset: -40% 0 auto 0;
    height: 80%;
    background: linear-gradient(
      to top,
      color-mix(in srgb, var(--aurora-midnight) 24%, transparent) 0%,
      transparent 70%
    );
    pointer-events: none;
    mix-blend-mode: plus-lighter;
  }

  .celestial-svg {
    width: 100%;
    height: 100%;
    display: block;
    background-color: color-mix(in srgb, var(--aurora-midnight) 55%, rgba(15, 23, 42, 0.85));
    filter: saturate(115%);
    --aurora-highlight: color-mix(in srgb, var(--color-secondary-100) 70%, var(--color-primary-50) 30%);
    --aurora-highlight-mid: color-mix(in srgb, var(--color-secondary-200) 65%, var(--color-primary-100) 35%);
    --aurora-caramel-light: color-mix(in srgb, var(--color-primary-200) 70%, var(--color-secondary-200) 30%);
    --aurora-caramel: var(--color-primary-400);
    --aurora-caramel-deep: var(--color-primary-600);
    --aurora-midnight: color-mix(in srgb, var(--color-neutral-900) 85%, #030712 15%);
    --aurora-halo: color-mix(in srgb, var(--color-neutral-50) 80%, var(--color-primary-50) 20%);
    --aurora-halo-edge: color-mix(in srgb, var(--color-info-300) 40%, transparent 60%);
    --aurora-ice: var(--color-info-100);
    --aurora-ice-mid: var(--color-info-200);
    --aurora-ice-bright: var(--color-info-400);
    --aurora-ice-deep: color-mix(in srgb, var(--color-info-700) 70%, var(--color-secondary-500) 30%);
    --aurora-orb-warm-core: color-mix(in srgb, var(--color-warning-100) 60%, var(--color-primary-50) 40%);
    --aurora-orb-cool-core: color-mix(in srgb, var(--color-info-100) 70%, white 30%);
    --aurora-grid-light: color-mix(in srgb, var(--color-neutral-50) 70%, var(--color-info-200) 30%);
    --aurora-glow: var(--color-warning-200);
    --aurora-sparkle: color-mix(in srgb, var(--color-neutral-50) 80%, white 20%);
    --aurora-success: color-mix(in srgb, var(--color-success-400) 70%, var(--color-success-200) 30%);
  }

  .aurora {
    mix-blend-mode: screen;
  }

  .aurora--cool {
    mix-blend-mode: lighten;
  }

  .orb {
    mix-blend-mode: screen;
  }

  .animated {
    transform-box: fill-box;
    transform-origin: center;
    animation: float 26s ease-in-out infinite alternate;
  }

  .float-slow {
    animation-duration: 34s;
  }

  .fast {
    animation-duration: 18s;
  }

  .animated-line {
    stroke-dasharray: 18 26;
    animation: dash 24s linear infinite;
  }

  .animated-line.faster {
    animation-duration: 18s;
  }

  .animated-line.slower {
    animation-duration: 32s;
  }

  .pulse {
    animation: pulse 14s ease-in-out infinite;
  }

  .sparkle {
    animation: sparkle 18s ease-in-out infinite;
  }

  .sparkle:nth-of-type(odd) {
    animation-duration: 22s;
  }

  .stop-highlight {
    animation: highlightGlow 18s ease-in-out infinite;
  }

  .stop-highlight-mid {
    animation: highlightGlow 22s ease-in-out infinite;
  }

  .stop-caramel {
    animation: caramelGlow 24s ease-in-out infinite;
  }

  .stop-ink {
    animation: midnightBreath 26s ease-in-out infinite;
  }

  @keyframes float {
    0% {
      transform: translate(0px, 0px) scale(1);
    }
    50% {
      transform: translate(-36px, 28px) scale(1.04);
    }
    100% {
      transform: translate(42px, -18px) scale(1.02);
    }
  }

  @keyframes pulse {
    0%,
    100% {
      opacity: 0.65;
    }
    50% {
      opacity: 0.92;
    }
  }

  @keyframes dash {
    0% {
      stroke-dashoffset: 0;
    }
    100% {
      stroke-dashoffset: -1280;
    }
  }

  @keyframes sparkle {
    0%,
    100% {
      opacity: 0.35;
      transform: scale(0.9) translateY(0px);
    }
    50% {
      opacity: 0.85;
      transform: scale(1.2) translateY(-8px);
    }
  }

  @keyframes highlightGlow {
    0%,
    100% {
      stop-color: var(--aurora-highlight);
    }
    50% {
      stop-color: var(--aurora-highlight-mid);
    }
  }

  @keyframes caramelGlow {
    0%,
    100% {
      stop-color: var(--aurora-caramel);
    }
    50% {
      stop-color: var(--aurora-caramel-deep);
    }
  }

  @keyframes midnightBreath {
    0%,
    100% {
      stop-opacity: 0.58;
    }
    50% {
      stop-opacity: 0.35;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .animated,
    .animated-line,
    .pulse,
    .sparkle,
    .stop-highlight,
    .stop-highlight-mid,
    .stop-caramel,
    .stop-ink {
      animation-duration: 0.001ms !important;
      animation-iteration-count: 1 !important;
      animation-timing-function: linear !important;
      animation-fill-mode: forwards !important;
    }

    .celestial-svg {
      filter: none;
    }
  }
</style>
