<script lang="ts">
import {
    onMounted
} from 'vue'
import anime from 'animejs/lib/anime.es.js';

interface LooseObject {
    // [key: string]: any
    style: {
        [key: string]: any
    }
}

onMounted(() => {
    // Set up constants, and references to DOM elements
    //   let logoEl: Element & LooseObject | null = document.querySelector('.logo-animation'); // Entire animation
    //   let pathEls = document.querySelectorAll('.logo-animation path:not(.icon-curve)'); // All animation path elements
    //   let innerWidth = window.innerWidth;
    //   const maxWidth = 740;
    //   const logoScale = innerWidth <= maxWidth ? innerWidth / maxWidth : 1;
    //   let logoTimeline = anime.timeline();

    //   // Set the logo scale
    //   if (logoEl && logoEl.style) {
    //       logoEl.style.transform = 'translateY(20px) scale(' + logoScale + ')';
    //   }

    //   logoTimeline
    //     // Move the dot from the left to the right
    //     .add({
    //       targets: '.dot-e',
    //       translateX: [
    //         { value: -600, duration: 520, delay: 200, easing: 'easeInQuart' },
    //         { value: [-100, 0], duration: 500, delay: 1000, easing: 'easeOutQuart' }
    //       ],
    //       scale: [
    //         { value: [0, 1], duration: 200, easing: 'easeOutBack' },
    //         { value: 0, duration: 20, delay: 500, easing: 'easeInQuart' },
    //         { value: 1, duration: 200, delay: 1000, easing: 'easeOutQuart' },
    //         { value: 0, duration: 400, delay: 500, easing: 'easeInBack' }
    //       ],
    //       offset: 0
    //     })
    //     // Move the i dot from top to down
    //     .add({
    //       targets: '.dot-i',
    //       translateY: { value: [-200, 0], duration: 500, elasticity: 400 },
    //       scale: [
    //         { value: [0, 1], duration: 100, easing: 'easeOutQuart' },
    //         { value: 0, duration: 400, delay: 1400, easing: 'easeInBack' }
    //       ],
    //       delay: 1200,
    //     }, 0) // 0 Offset means begin at the beginning of the timeline
    //     // Fill in the letters stylistically so they can be seen.
    //     .add({
    //       targets: '.fill.in',
    //       // The initial slow fill in for the 'anime' lettering
    //       strokeDashoffset: {
    //         // From, to
    //         value: [anime.setDashoffset, 0],
    //         duration: 600,
    //         // delay: function (el, i, t) { return 700 + (i * 100); },
    //         delay: anime.stagger(100, {start: 700}),
    //         easing: 'easeOutQuart'
    //       },
    //       // The white flash on the 'a' letter in the beginning
    //       stroke: {
    //         value: ['#FFF', function (el: Element) { return anime.get(el.parentNode, 'stroke') }],
    //         duration: 500,
    //         delay: 500,
    //         easing: 'easeInQuad'
    //       },
    //       opacity: {
    //         value: 0,
    //         duration: 1,
    //         delay: anime.stagger(80, {start: 1900}),
    //       }
    //     }, 0)
    //     // Un-draw the letters after the initial draw/fill
    //     .add({
    //       targets: '.fill.out',
    //       strokeDashoffset: [
    //         // Calling anime.setDashoffset will make the line dissappear inintially, and reappear at 1890
    //         { value: [anime.setDashoffset, anime.setDashoffset], duration: 1900 },
    //         {
    //           value: [0, anime.setDashoffset],
    //           duration: 800,
    //           // duration: 2690,
    //           // delay: function (el, i) { return (i * 80); },
    //           delay: anime.stagger(80),
    //           // delay: anime.stagger(80, {start: 2690}),
    //           easing: 'easeInQuart'
    //         }
    //       ]
    //     }, 0)
    //     .add({
    //       targets: '.line.out',
    //       strokeDashoffset: {
    //         value: [0, anime.setDashoffset],
    //         duration: 1200,
    //         // delay: function (el, i, t) { return 2500 + (i * 100); },
    //         delay: anime.stagger(100, {start: 2500}),
    //         easing: 'easeInQuart'
    //       },
    //       strokeWidth: {
    //         value: [0, 2],
    //         // delay: function (el, i, t) { return 2000 + (i * 100); },
    //         delay: anime.stagger(100, {start: 2000}),
    //         duration: 200,
    //         easing: 'linear'
    //       }
    //     }, 0)
    //     .add({
    //       targets: '.icon',
    //       opacity: { value: 1, duration: 10, delay: 2800, easing: 'linear' },
    //       translateY: { value: 60, duration: 800 },
    //       delay: 4200,
    //     }, 0)
    //     .add({
    //       targets: '.icon-line',
    //       strokeDashoffset: [
    //         // Forces the animation to start at a specific value [before, after]
    //         // The grabs the current value of the strokeDashoffset, and sets it to the same thing, over 3000 ms.
    //         // TODO: Revisit this, kind of wierd and seems pointless.
    //         { value: [anime.setDashoffset, anime.setDashoffset], duration: 3000 },
    //         { value: 0, duration: 1200, easing: 'easeInOutQuart' }
    //       ],
    //       strokeWidth: {
    //         value: [8, 2],
    //         delay: 3000,
    //         duration: 800,
    //         easing: 'easeInQuad'
    //       },
    //       stroke: {
    //         value: ['#FFF', function (el: Element) { return anime.get(el, 'stroke') }],
    //         duration: 800,
    //         delay: 3400,
    //         easing: 'easeInQuad'
    //       }
    //     }, 0)
    //     .add({
    //       targets: ['.icon-text path', '.icon-text polygon'],
    //       translateY: [50, 0],
    //       opacity: { value: [0, 1], duration: 100, easing: 'linear' },
    //       // delay: function (el, i, t) { return 4200 + (i * 20); },
    //       delay: anime.stagger(20, {start: 4200})
    //     }, 0);
})
</script>
<template>
<div class="about">
    <!-- <h1>This is an about page</h1> -->
    <div class="logo-animation">
        <div class="letters">
            <div class="letter letter-k">
                <svg viewBox="0 0 162 162">
                    <sodipodi:namedview id="namedview1" pagecolor="#ffffff" bordercolor="#000000" borderopacity="0.25" inkscape:showpageshadow="2" inkscape:pageopacity="0.0" inkscape:pagecheckerboard="0" inkscape:deskcolor="#d1d1d1" inkscape:document-units="mm" inkscape:zoom="0.6833413" inkscape:cx="186.58319" inkscape:cy="163.16883" inkscape:window-width="1200" inkscape:window-height="498" inkscape:window-x="0" inkscape:window-y="38" inkscape:window-maximized="0" inkscape:current-layer="layer1" />
                    <defs id="defs1" />
                    <g inkscape:label="Layer 1" inkscape:groupmode="layer" id="layer1">
                        <rect style="fill:#000000;stroke-width:0.218367" id="rect5" width="16.394346" height="55.461723" x="51.275936" y="22.673033" />
                        <path id="rect5-9" style="stroke-width:0.177914" d="M 76.380281 -26.537075 L 76.380068 16.236883 L 90.040797 16.237192 L 90.286859 -36.978828 L 76.380281 -26.537075 z " transform="matrix(0.83908865,0.5439947,-0.68926931,0.72450522,0,0)" />
                        <path id="rect5-9-8" style="stroke-width:0.181314" d="M 119.18944,78.523945 94.087865,78.611843 67.841213,52.269638 72.949868,38.229103 Z" sodipodi:nodetypes="ccccc" />
                    </g>
                </svg>
            </div>
            <div class="letter letter-u">
                <svg viewBox="0 0 162 162">
                    <sodipodi:namedview id="namedview1" pagecolor="#ffffff" bordercolor="#000000" borderopacity="0.25" inkscape:showpageshadow="2" inkscape:pageopacity="0.0" inkscape:pagecheckerboard="0" inkscape:deskcolor="#d1d1d1" inkscape:document-units="mm" inkscape:zoom="0.59453966" inkscape:cx="355.73741" inkscape:cy="370.87517" inkscape:window-width="1064" inkscape:window-height="662" inkscape:window-x="0" inkscape:window-y="38" inkscape:window-maximized="0" inkscape:current-layer="layer1" />
                    <defs id="defs1">
                        <inkscape:path-effect effect="bspline" id="path-effect3" is_visible="true" lpeversion="1.3" weight="33.333333" steps="2" helper_size="0" apply_no_weight="true" apply_with_weight="true" only_selected="false" uniform="false" />
                        <inkscape:path-effect effect="bspline" id="path-effect2" is_visible="true" lpeversion="1.3" weight="33.333333" steps="2" helper_size="0" apply_no_weight="true" apply_with_weight="true" only_selected="false" uniform="false" />
                        <inkscape:path-effect effect="bspline" id="path-effect1" is_visible="true" lpeversion="1.3" weight="33.333333" steps="2" helper_size="0" apply_no_weight="true" apply_with_weight="true" only_selected="false" uniform="false" />
                    </defs>
                    <g inkscape:label="Layer 1" inkscape:groupmode="layer" id="layer1">
                        <path style="fill:#ffffff;stroke-width:0.264583" d="m 44.947239,29.371464 c 0,23.734514 0,47.46903 10.90326,59.336288 C 66.75376,100.57501 88.559411,100.57501 99.462456,88.559172 110.3655,76.543333 110.3655,52.512616 110.3655,28.481419" id="path1" inkscape:path-effect="#path-effect1" inkscape:original-d="m 44.947239,29.371464 c 0,23.734514 0,47.46903 0,71.203546 21.806521,0 43.612172,0 65.418261,0 0,-24.031677 0,-48.062394 0,-72.093591" />
                        <path style="fill:#000000;fill-opacity:1;stroke-width:0.264583" d="M 33.970026,25.885456 C 30.706531,39.606974 30.706531,68.088393 46.653477,82.329101 62.600424,96.569809 94.493039,96.569809 110.43966,82.625503 126.38629,68.681197 126.38629,40.793699 122.38102,26.849671 118.37574,12.905643 110.3655,12.905643 106.3603,22.02878 102.3551,31.151917 102.3551,49.397462 93.676994,58.520415 84.998887,67.643369 67.643369,67.643369 58.965437,58.742748 50.287504,49.842126 50.287504,32.041597 47.023943,22.62195 43.760382,13.202303 37.233521,12.163939 33.970026,25.885456 Z" id="path2" inkscape:path-effect="#path-effect3" inkscape:original-d="m 30.706531,11.125554 c 0,28.48142 0,56.962839 0,85.444255 31.893893,0 63.786508,0 95.679759,0 0,-27.888612 0,-55.77611 0,-83.664166 -8.01055,0 -16.02079,0 -24.03119,0 0,18.246274 0,36.491819 0,54.737726 -17.356213,0 -34.711731,0 -52.067596,0 0,-17.801243 0,-35.601772 0,-53.40266 -6.527122,-1.038405 -13.053983,-2.07677 -19.580973,-3.115155 z" transform="matrix(0.78316349,0,0,0.74731407,15.004167,11.941085)" />
                    </g>
                </svg>
            </div>
            <div class="letter letter-n">
                <svg viewBox="0 0 162 162">
                    <sodipodi:namedview id="namedview1" pagecolor="#ffffff" bordercolor="#000000" borderopacity="0.25" inkscape:showpageshadow="2" inkscape:pageopacity="0.0" inkscape:pagecheckerboard="0" inkscape:deskcolor="#d1d1d1" inkscape:document-units="mm" inkscape:zoom="1.0117193" inkscape:cx="278.23924" inkscape:cy="227.83" inkscape:window-width="1064" inkscape:window-height="680" inkscape:window-x="0" inkscape:window-y="38" inkscape:window-maximized="0" inkscape:current-layer="layer1" />
                    <defs id="defs1">
                        <inkscape:path-effect effect="bspline" id="path-effect2" is_visible="true" lpeversion="1.3" weight="33.333333" steps="2" helper_size="0" apply_no_weight="true" apply_with_weight="true" only_selected="false" uniform="false" />
                    </defs>
                    <g inkscape:label="Layer 1" inkscape:groupmode="layer" id="layer1">
                        <rect style="fill:#000000;stroke-width:0.218588" id="rect1" width="11.245296" height="48.642445" x="50.473076" y="14.645039" ry="6.9302406" />
                        <path style="fill:#000000;stroke-width:0.264583" d="m 56.662346,53.69847 c 2.092148,-7.671209 9.065976,-22.577767 17.347491,-30.379743 8.281516,-7.801976 17.870336,-8.499344 22.752018,-0.871561 4.881685,7.627783 5.056025,23.580094 2.615132,31.599996 -2.440889,8.019902 -7.496814,8.107073 -10.068413,2.527899 C 86.736975,50.995886 86.649803,39.750814 85.037075,34.08458 83.424346,28.418345 80.286187,28.331174 75.883901,33.953935 71.481616,39.576697 65.815495,50.908939 61.587584,56.357237 57.359674,61.805535 54.570198,61.36968 56.662346,53.69847 Z" id="path2" inkscape:path-effect="#path-effect2" inkscape:original-d="M 51.780667,60.933816 C 58.754493,46.02726 65.728323,31.120704 72.702149,16.214148 82.291353,15.516752 91.880173,14.819383 101.46919,14.122 c 0.17435,15.952949 0.34869,31.90526 0.52303,47.857889 -5.056122,0.08718 -10.112047,0.174347 -15.16807,0.261519 C 86.736975,50.995886 86.649802,39.750814 86.56263,28.50552 83.424346,28.418345 80.286187,28.331173 77.147964,28.244001 71.481616,39.576697 65.815495,50.908939 60.14926,62.241408 57.359674,61.805536 54.570198,61.36968 51.780667,60.933816 Z" transform="translate(-4.4458149,0.52303705)" />
                    </g>
                </svg>
            </div>

            <div class="letter letter-l">
                <svg viewBox="0 0 162 162">
                    <sodipodi:namedview id="namedview1" pagecolor="#ffffff" bordercolor="#000000" borderopacity="0.25" inkscape:showpageshadow="2" inkscape:pageopacity="0.0" inkscape:pagecheckerboard="0" inkscape:deskcolor="#d1d1d1" inkscape:document-units="mm" inkscape:zoom="0.52661204" inkscape:cx="392.12928" inkscape:cy="511.76195" inkscape:window-width="1064" inkscape:window-height="726" inkscape:window-x="0" inkscape:window-y="38" inkscape:window-maximized="0" inkscape:current-layer="layer1" />
                    <defs id="defs1">
                        <inkscape:path-effect effect="bspline" id="path-effect1" is_visible="true" lpeversion="1.3" weight="33.333333" steps="2" helper_size="0" apply_no_weight="true" apply_with_weight="true" only_selected="false" uniform="false" />
                    </defs>
                    <g inkscape:label="Layer 1" inkscape:groupmode="layer" id="layer1">
                        <rect style="fill:#000000;stroke-width:0.177852" id="rect1" width="24.657677" height="66.320175" x="51.247402" y="30.145529" ry="8.0512142" />
                        <path style="fill:#000000;stroke-width:0.264583" d="m 78.713333,132.89155 c 5.694157,-5.27547 13.732963,-9.29487 19.929588,-15.24032 6.196629,-5.94544 10.550899,-13.81662 13.481729,-11.8068 2.93083,2.00982 4.43807,13.90032 0.83727,23.69769 -3.6008,9.79738 -12.30934,17.50108 -20.934395,20.76684 -8.625057,3.26575 -17.166122,2.09345 -19.761953,-1.75855 -2.595832,-3.85199 0.753605,-10.38339 6.447761,-15.65886 z" id="path1" inkscape:path-effect="#path-effect1" inkscape:original-d="m 76.368681,131.63549 c 8.038807,-4.01941 16.077616,-8.03881 24.116429,-12.05822 4.35444,-7.87148 8.70871,-15.74266 13.06306,-23.613994 1.50731,11.890974 3.01455,23.781474 4.52183,35.672214 -8.70888,7.70401 -17.41742,15.40771 -26.126129,23.11157 -8.541403,-1.17235 -17.082468,-2.34465 -25.623702,-3.51698 3.349572,-6.53166 6.699007,-13.06306 10.048512,-19.59459 z" transform="matrix(0.83181825,0,0,0.54320991,0.2603415,13.224334)" />
                    </g>
                </svg>
            </div>
            <div class="letter letter-e">
                <svg viewBox="0 0 162 162">
                    <sodipodi:namedview id="namedview1" pagecolor="#ffffff" bordercolor="#000000" borderopacity="0.25" inkscape:showpageshadow="2" inkscape:pageopacity="0.0" inkscape:pagecheckerboard="0" inkscape:deskcolor="#d1d1d1" inkscape:document-units="mm" inkscape:zoom="0.84284976" inkscape:cx="476.95333" inkscape:cy="291.86696" inkscape:window-width="896" inkscape:window-height="661" inkscape:window-x="0" inkscape:window-y="38" inkscape:window-maximized="0" inkscape:current-layer="layer1" />
                    <defs id="defs1">
                        <inkscape:path-effect effect="bspline" id="path-effect1" is_visible="true" lpeversion="1.3" weight="33.333333" steps="2" helper_size="0" apply_no_weight="true" apply_with_weight="true" only_selected="false" uniform="false" />
                    </defs>
                    <g inkscape:label="Layer 1" inkscape:groupmode="layer" id="layer1">
                        <path style="fill:#000000;stroke-width:0.264583" d="m 93.65136,34.373711 c -1.046385,0.470874 -2.302044,0.470874 -5.388926,1.203357 -3.086882,0.732484 -8.004788,2.197391 -10.934672,5.859793 -2.929884,3.662402 -3.871611,9.522037 -3.61,16.794492 0.261611,7.272455 1.726518,15.957265 5.650521,19.567276 3.924004,3.61001 10.306818,2.145102 11.824041,3.243842 1.517223,1.09874 -1.831138,4.761009 -5.1796,7.795547 -3.348462,3.034538 -6.696822,5.441172 -6.958389,10.306932 -0.261568,4.86576 2.563613,12.1903 8.842011,15.17248 6.278399,2.98218 16.009574,1.62191 23.700554,-2.66834 7.69098,-4.29024 13.34134,-11.51015 15.01553,-18.102429 1.67419,-6.592278 -0.62781,-12.556548 -4.91804,-13.13201 -4.29024,-0.575462 -10.56842,4.237808 -14.64933,3.714556 -4.08092,-0.523251 -5.96437,-6.382881 -1.15089,-11.196286 4.81348,-4.813404 16.32347,-8.58031 19.20097,-11.667166 2.8775,-3.086855 -2.8775,-5.493492 -8.94659,-6.592194 -6.06909,-1.098701 -12.45191,-0.889428 -10.7776,-2.563678 1.67432,-1.67425 11.4055,-5.231884 18.78256,-10.359232 7.37705,-5.127348 12.39959,-11.824072 7.3768,-13.707533 -5.0228,-1.883461 -20.09042,1.046354 -28.04295,2.982174 -7.952525,1.935821 -8.789614,2.877546 -9.836,3.348419 z" id="path1" inkscape:path-effect="#path-effect1" inkscape:original-d="m 93.860637,34.844585 c -1.255662,0 -2.511321,0 -3.766981,0 -4.918104,1.464966 -9.83601,2.929874 -14.754013,4.394811 -0.941766,5.859867 -1.883492,11.719502 -2.825237,17.57925 1.464966,8.685162 2.929874,17.369972 4.394811,26.05496 6.38307,-1.464967 12.765884,-2.929875 19.148827,-4.394812 -3.348498,3.662416 -6.696858,7.324686 -10.045287,10.98703 -3.348495,2.406732 -6.696855,4.813366 -10.045284,7.22005 2.825292,7.324836 5.650473,14.649376 8.47571,21.974056 9.731562,-1.36032 19.462737,-2.72059 29.194107,-4.08089 5.65059,-7.22019 11.30095,-14.4401 16.95142,-21.660147 -2.30209,-5.96451 -4.60409,-11.928779 -6.90613,-17.893168 -6.27843,4.813464 -12.55661,9.626732 -18.83491,14.440099 -1.88353,-5.859868 -3.76698,-11.719499 -5.650474,-17.57925 11.510454,-3.767056 23.020444,-7.533963 34.530664,-11.300944 -5.75522,-2.406732 -11.51022,-4.813366 -17.26533,-7.220051 -6.38307,0.20928 -12.76589,0.418555 -19.148826,0.62783 9.731566,-3.557775 19.462746,-7.11541 29.194116,-10.673114 5.02274,-6.696993 10.04528,-13.393716 15.06792,-20.090572 -15.06823,2.929934 -30.13585,5.859751 -45.203781,8.789625 -0.837126,0.941763 -1.674214,1.883489 -2.511322,2.825237 z" transform="translate(-28.880196,-4.7087277)" />
                    </g>
                </svg>
            </div>
            <!-- <div class="letter letter-a">
          <svg viewBox="0 0 162 162">
            <g fill="none" fill-rule="evenodd" stroke="#5E89FB">
              <path class="fill in" stroke-width="40" d="M101 141H81a60 60 0 1 1 0-120c33.14 0 59 26.86 60 60v80" />
              <path class="fill out" stroke-width="40" d="M141 161V81c-1-33.14-26.86-60-60-60a60 60 0 1 0 0 120h20" />
              <path class="line out" stroke-width="2"
                d="M121 161V81.33C120.18 58.59 102.7 41 81 41a40 40 0 1 0 0 80h20v40H81A80 80 0 1 1 81 1c43.8 0 78.66 35.27 80 79.7V161h-40z" />
            </g>
          </svg>
        </div>
        <div class="letter letter-n">
          <svg viewBox="0 0 162 162">
            <g fill="none" fill-rule="evenodd" stroke="#FB155A">
              <path class="fill in" stroke-width="40" d="M21 161V1" />
              <path class="fill out" stroke-width="40" d="M21 1v160" />
              <path class="fill in" stroke-width="40" d="M21 161V81c1-33.14 26.86-60 60-60a60 60 0 0 1 60 60v80" />
              <path class="fill out" stroke-width="40" d="M141 161V81a60 60 0 0 0-60-60c-33.14 0-59 26.86-60 60v80" />
              <path class="line out" stroke-width="2" d="M41 161V1H1v160h40z" />
              <path class="line out" stroke-width="2"
                d="M1 161V80.4C2.35 36.27 37.2 1 81 1a80 80 0 0 1 80 80v80h-40V81a40 40 0 0 0-40-40c-21.7 0-39.18 17.59-40 40.33V161H1z" />
            </g>
          </svg>
        </div>
        <div class="letter letter-i">
          <svg viewBox="0 0 82 162">
            <g fill="none" fill-rule="evenodd" stroke="#18FF92">
              <path class="fill in" stroke-width="40" d="M21 61v20a60 60 0 0 0 60 60" />
              <path class="fill out" stroke-width="40" d="M81 141a60 60 0 0 1-60-60V61" />
              <path class="line out" stroke-width="2" d="M81 121a40 40 0 0 1-40-40V61H1v20a80 80 0 0 0 80 80v-40z" />
            </g>
          </svg>
        </div>
        <div class="letter letter-m-1">
          <svg viewBox="0 0 162 162">
            <g fill="none" fill-rule="evenodd" stroke="#5E89FB">
              <path class="fill in" stroke-width="40" d="M21 161V1" />
              <path class="fill out" stroke-width="40" d="M21 1v160" />
              <path class="fill in" stroke-width="40" d="M21 161V81c1-33.14 26.86-60 60-60a60 60 0 0 1 60 60v80" />
              <path class="fill out" stroke-width="40" d="M141 161V81a60 60 0 0 0-60-60c-33.14 0-59 26.86-60 60v80" />
              <path class="line out" stroke-width="2" d="M41 161V1H1v160h40z" />
              <path class="line out" stroke-width="2"
                d="M1 161V80.4C2.35 36.27 37.2 1 81 1a80 80 0 0 1 80 80v80h-40V81a40 40 0 0 0-40-40c-21.7 0-39.18 17.59-40 40.33V161H1z" />
            </g>
          </svg>
        </div>
        <div class="letter letter-m-2">
          <svg viewBox="0 0 162 162">
            <g fill="none" fill-rule="evenodd" stroke="#FB155A">
              <path class="fill in" stroke-width="40" d="M21 161V81c1-33.14 26.86-60 60-60a60 60 0 0 1 60 60v80" />
              <path class="fill out" stroke-width="40" d="M141 161V81a60 60 0 0 0-60-60c-33.14 0-59 26.86-60 60v80" />
              <path class="line out" stroke-width="2"
                d="M1 161V80.4C2.35 36.27 37.2 1 81 1a80 80 0 0 1 80 80v80h-40V81a40 40 0 0 0-40-40c-21.7 0-39.18 17.59-40 40.33V161H1z" />
            </g>
          </svg>
        </div>
        <div class="letter letter-e">
          <svg viewBox="0 0 162 162">
            <g fill="none" fill-rule="evenodd" stroke="#18FF92">
              <path class="fill in" stroke-width="40" d="M81 101h60V81c-1-33.14-26.86-60-60-60a60 60 0 1 0 0 120" />
              <path class="fill out" stroke-width="40" d="M81 141a60 60 0 1 1 0-120c33.14 0 59 26.86 60 60v20H81" />
              <path class="line out" stroke-width="2"
                d="M81 81v40h80V80.7C159.66 36.27 124.8 1 81 1a80 80 0 1 0 0 160v-40a40 40 0 1 1 0-80c21.6 0 39.01 17.42 39.99 40H81z" />
            </g>
          </svg>
        </div>
        <div class="logo-icon">
          <div class="icon">
            <svg viewBox="0 0 62 62">
              <g fill="none" fill-rule="evenodd" stroke-width="2" transform="translate(1 1)">
                <path class="icon-curve" stroke="#FF1554" d="M0 16a80.88 80.88 0 0 1 44 44" />
                <path class="icon-line" stroke="#5E89FB"
                  d="M4 0h54a2 2 0 0 1 2 2.01V58A2 2 0 0 1 58 60H2a2 2 0 0 1-2-2.01V2A2 2 0 0 1 2 0h2z" />
                <rect width="40" height="40" x="10" y="10" stroke="#18FF92" rx="20" />
              </g>
            </svg>
          </div>
          <div class="icon-text">
            <svg viewBox="0 0 160 62">
              <g fill="#FBF3FB" fill-rule="evenodd">
                <path
                  d="M27.33 18h1.73l10.15 25.7h-1.69l-3.24-8.24H21.97l-3.28 8.24H17L27.33 18zm6.45 16.1l-5.51-14.55h-.07l-5.73 14.54h11.3z" />
                <polygon
                  points="51.334 18 53.314 18 69.55 41.58 69.622 41.58 69.622 18 71.206 18 71.206 43.704 69.334 43.704 52.99 19.944 52.918 19.944 52.918 43.704 51.334 43.704" />
                <polygon points="86.027 18 87.611 18 87.611 43.704 86.027 43.704" />
                <polygon
                  points="102.433 18 104.701 18 114.745 41.94 114.817 41.94 124.753 18 127.021 18 127.021 43.704 125.437 43.704 125.437 19.944 125.365 19.944 115.573 43.704 113.989 43.704 104.089 19.944 104.017 19.944 104.017 43.704 102.433 43.704" />
                <polygon
                  points="141.843 18 159.123 18 159.123 19.368 143.427 19.368 143.427 29.664 158.187 29.664 158.187 31.032 143.427 31.032 143.427 42.336 159.303 42.336 159.303 43.704 141.843 43.704" />
              </g>
            </svg>
          </div>
        </div>
        <div class="dot dot-i">
          <svg viewBox="0 0 42 42">
            <g fill="none" fill-rule="evenodd">
              <rect width="40" height="40" x="1" y="1" fill="#17F28C" rx="20" />
            </g>
          </svg>
        </div>
        <div class="dot dot-e">
          <svg viewBox="0 0 42 42">
            <g fill="none" fill-rule="evenodd">
              <rect width="40" height="40" x="1" y="1" fill="#FFFFFF" rx="20" />
            </g>
          </svg>
        </div> -->
        </div>
    </div>
</div>
</template>

<style>
.letter-u {
    position: relative;
    left: -54px;
}

.letter-n {
    position: relative;
    left: -110px;
    top: 12px;
}

.letter-l {
    position: relative;
    left: -180px;
    top: -10px;
}

.letter-e {
    position: relative;
    left: -252px;
    top: -22px;
}

@media (min-width: 1024px) {
    .about {
        min-height: 100vh;
        display: flex;
        align-items: center;
    }
}

.about {
    opacity: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

about.ready {
    opacity: 1;
}

.logo-animation {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: -40px;
}

.letters {
    position: relative;
    display: flex;
    width: 682px;
    height: 162px;
}

.letter {
    position: relative;
    width: 162px;
    height: 162px;
}

.letter:not(:first-child) {
    margin-left: -42px;
}

.letter-i {
    z-index: 1;
    width: 82px;
    transform-origin: 100% 50%;
}

.dot {
    position: absolute;
    width: 42px;
    height: 42px;
    transform: scale(0);
}

.dot-i {
    top: 0;
    left: 240px;
}

.dot-e {
    bottom: 0;
    right: 0;
}

.logo-icon {
    display: flex;
    position: absolute;
    left: 230px;
    top: -10px;
    width: 222px;
    height: 62px;
}

.icon {
    width: 62px;
    height: 62px;
    opacity: 0;
}

.icon-text {
    position: absolute;
    top: 60px;
    left: 60px;
    width: 160px;
    height: 62px;
}

.icon-text path,
.icon-text polygon {
    opacity: 0;
}
</style>
