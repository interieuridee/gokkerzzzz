import React, { useEffect, useRef } from "react";
import "./css/base.css";

const LOGOS = [
  "365.svg", "711.svg", "777.svg", "bet mgm.svg", "betcity.svg", "betnation.svg",
  "bingoal.svg", "circus.svg", "comeon.svg", "fairplay casino.svg", "ggpoker.svg", "gokkerz-emblem.svg",
  "goldrun casino.svg", "hardrock casino.svg", "holland casino.svg", "hommerson.svg", "jacks casino.svg", "kansino.svg",
  "leovegas.svg", "lucky 7 casino.svg", "one casino.svg", "scori pro.svg", "tonybet.svg", "toto.svg",
  "unibet.svg", "vbet.svg", "winnit.svg", "ze bet.svg"
];

const ROWS = 5;
const LOGOS_PER_ROW = 6;
const LOGO_WIDTH = 480; // px
const CONTAINER_WIDTH = 2880; // px
const BASE_SPEED = 0.3;

function getInitialLogoState() {
  // Verdeel de logo's over de rijen
  let state = [];
  let idx = 0;
  for (let row = 0; row < ROWS; row++) {
    for (let i = 0; i < LOGOS_PER_ROW; i++) {
      state.push({
        file: LOGOS[idx % LOGOS.length],
        row,
        position: i * LOGO_WIDTH,
        key: `${row}-${i}-${LOGOS[idx % LOGOS.length]}`
      });
      idx++;
    }
  }
  return state;
}

export default function CasinoLogoTiles() {
  const linesRef = useRef([]);
  const logoState = useRef(getInitialLogoState());

  useEffect(() => {
    let running = true;
    function animate() {
      if (!running) return;
      for (let row = 0; row < ROWS; row++) {
        const direction = row % 2 === 0 ? 1 : -1;
        logoState.current.forEach(logo => {
          if (logo.row === row) {
            logo.position += BASE_SPEED * direction;
            // Check of logo uit beeld is
            if ((direction > 0 && logo.position > CONTAINER_WIDTH / 2) ||
                (direction < 0 && logo.position < -CONTAINER_WIDTH / 2)) {
              // Verplaats naar volgende rij
              const nextRow = (logo.row + 1) % ROWS;
              logo.row = nextRow;
              logo.position = nextRow % 2 === 0 ? -CONTAINER_WIDTH / 2 : CONTAINER_WIDTH / 2;
            }
          }
        });
      }
      // Force update
      for (let row = 0; row < ROWS; row++) {
        const line = linesRef.current[row];
        if (line) {
          // Filter logos for this row, sort by position
          const rowLogos = logoState.current.filter(l => l.row === row).sort((a, b) => a.position - b.position);
          rowLogos.forEach((logo, i) => {
            const el = line.children[i];
            if (el) {
              el.style.transform = `translateX(${logo.position}px)`;
            }
          });
        }
      }
      requestAnimationFrame(animate);
    }
    animate();
    return () => { running = false; };
  }, []);

  // Render
  let rows = [];
  for (let row = 0; row < ROWS; row++) {
    const rowLogos = logoState.current.filter(l => l.row === row);
    rows.push(
      <div
        className="tiles__line"
        key={row}
        ref={el => (linesRef.current[row] = el)}
        style={{ width: CONTAINER_WIDTH, height: 216, display: "flex", alignItems: "center", padding: 0 }}
      >
        {rowLogos.map(logo => (
          <div
            className="tiles__line-img"
            key={logo.key}
            style={{
              backgroundImage: `url(/casilogos/${logo.file})`,
              width: LOGO_WIDTH,
              height: 216,
              margin: 0
            }}
          />
        ))}
      </div>
    );
  }

  return (
    <div style={{
      width: 1920,
      height: 1080,
      overflow: "hidden",
      position: "relative",
      background: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <div
        className="tiles tiles--rotated"
        style={{
          width: 1920,
          height: 1080,
          position: "relative",
          overflow: "hidden"
        }}
      >
        <div
          className="tiles__wrap"
          style={{
            width: CONTAINER_WIDTH,
            height: 1080,
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate3d(-50%,-50%,0) rotate(22.5deg) scale(1.2)"
          }}
        >
          {rows}
        </div>
      </div>
    </div>
  );
}
