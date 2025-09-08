export function ChanhDaiMark(props: React.ComponentProps<"svg">) {
  return (
    // <svg
    //   xmlns="http://www.w3.org/2000/svg"
    //   fill="none"
    //   viewBox="0 0 512 256"
    //   {...props}
    // >
    //   <path
    //     fill="currentColor"
    //     d="M192 256H64v-64h128v64ZM448 64H320v128h128v64H256V0h192v64ZM64 192H0V64h64v128ZM512 192h-64V64h64v128ZM192 64H64V0h128v64Z"
    //   />
    // </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 256"
      fill="currentColor"
      shapeRendering="crispEdges"
      {...props}
    >
      <rect x="144" y="48" width="96" height="32" />
      <rect x="144" y="80" width="32" height="32" />
      <rect x="144" y="112" width="96" height="32" />
      <rect x="208" y="144" width="32" height="32" />
      <rect x="144" y="176" width="96" height="32" />

      <rect x="272" y="48" width="32" height="160" />

      <rect x="304" y="80" width="32" height="32" />
      <rect x="336" y="48" width="32" height="32" />
      <rect x="304" y="112" width="10" height="32" />

      <rect x="304" y="144" width="32" height="32" />
      <rect x="336" y="176" width="32" height="32" />
    </svg>
  );
}

export function getMarkSVG(color: string) {
  // return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 256 128"><path fill="${color}" d="M96 128H32V96h64v32ZM224 32h-64v64h64v32h-96V0h96v32ZM32 96H0V32h32v64ZM256 96h-32V32h32v64ZM96 32H32V0h64v32Z"/></svg>`;
  return '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 512 256"><path fill=${color} d="M144 48h96v32h-96V48Z M144 80h32v32h-32V80Z M144 112h96v32h-96v-32Z M208 144h32v32h-32v-32Z M144 176h96v32h-96v-32Z M272 48h32v160h-32V48Z M304 80h32v32h-32V80Z M336 48h32v32h-32V48Z M304 112h10v32h-10v-32Z M304 144h32v32h-32v-32Z M336 176h32v32h-32v-32Z"/></svg>';
}
