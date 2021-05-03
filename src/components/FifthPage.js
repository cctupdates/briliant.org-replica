import React from "react";
import LeftGrid from "./LeftGrid";
import ThirdDiv from "./ThirdDiv";

const FifthPage = () => {
  return (
    <div>
      <section className='new-container'>
        <LeftGrid />
        <div class='second-div'>
          <p>Arrange the cards to make the following true:</p>
          <ul>
            <li>The king is in one of the two middle spaces.</li>
            <li>The queen is left of the jack and right of the ace.</li>
            <li>The ace is directly next to the queen.</li>
          </ul>
          <p>(Note: Left and right are from the player's perspective).</p>
          <div class='inside-grid sp'>
            <div>
              <p>Drag the characters into the dotted boxes.</p>
            </div>

            <div>
              Reset
              <img
                style={{ width: "20px", height: "20px" }}
                src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQyOS4zNTQgNDI5LjM1NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGcgdHJhbnNmb3JtPSJtYXRyaXgoLTEsLTIuNDQ5MjkzNTk4Mjk0NzA3ZS0xNiwtMi40NDkyOTM1OTgyOTQ3MDdlLTE2LDEsNDI5LjM1NDA5NTQ1ODk4NDQsNS42ODQzNDE4ODYwODA4MDJlLTE0KSI+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMzcyLjUzLDgyLjg0M0MzMzYuNjczLDMwLjk1OCwyNzcuNjIxLTAuMDA5LDIxNC41NSwwQzEwOC41MTIsMC4xMTUsMjIuNjQ0LDg2LjE3LDIyLjc1OSwxOTIuMjA4ICAgIGMwLjEwNyw5OC43NTEsNzUuMTA1LDE4MS4zMTcsMTczLjM5MiwxOTAuODg4TDE2My42MzgsNDE1LjZjLTMuMTc4LDMuMDctMy4yNjYsOC4xMzQtMC4xOTYsMTEuMzEyICAgIGMzLjA3LDMuMTc4LDguMTM0LDMuMjY2LDExLjMxMiwwLjE5NmMwLjA2Ny0wLjA2NCwwLjEzMi0wLjEzLDAuMTk2LTAuMTk2bDQ1LjI0OC00NS4yNDhjMC43NDctMC43NDUsMS4zMzctMS42MzIsMS43MzYtMi42MDggICAgYzAuODA5LTEuOTU3LDAuODA5LTQuMTU1LDAtNi4xMTJjLTAuMzk5LTAuOTc2LTAuOTg5LTEuODYzLTEuNzM2LTIuNjA4bC00NS4yNDgtNDUuMjQ4Yy0zLjE3OC0zLjA3LTguMjQzLTIuOTgyLTExLjMxMiwwLjE5NiAgICBjLTIuOTk0LDMuMS0yLjk5NCw4LjAxNSwwLDExLjExNmwzMC40LDMwLjRDOTcuNTYsMzU1LjQ0LDI4LjU1OSwyNjguMDE5LDM5LjkxOSwxNzEuNTQxUzEzOC43LDYuMDYxLDIzNS4xNzgsMTcuNDIyICAgIHMxNjUuNDgsOTguNzgxLDE1NC4xMTksMTk1LjI1OWMtNS45MDgsNTAuMTc3LTMzLjEwNyw5NS4zOS03NC42NjcsMTI0LjExOWMtMy42OTEsMi40MjgtNC43MTQsNy4zODktMi4yODYsMTEuMDggICAgYzIuNDI5LDMuNjkxLDcuMzg5LDQuNzE0LDExLjA4LDIuMjg2YzAuMTA1LTAuMDY5LDAuMjA4LTAuMTQxLDAuMzEtMC4yMTRDNDEwLjk2OSwyODkuNjY2LDQzMi44MTUsMTcwLjA3OCwzNzIuNTMsODIuODQzeiIgZmlsbD0iIzAwMDAwMCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjwvZz48L3N2Zz4='
                alt='reset'
              />
            </div>
          </div>
          <div class='grid'>
            <div class='empty'></div>

            <div class='empty'>
              <div class='fill' draggable='true'></div>
            </div>

            <div class='empty'></div>

            <div class='empty'>
              <div class='fill' draggable='true'></div>
            </div>

            <div class='empty'></div>

            <div class='empty'>
              <div class='fill' draggable='true'></div>
            </div>
          </div>
        </div>
        <ThirdDiv />
      </section>
    </div>
  );
};

export default FifthPage;
