import NavbarPopup from "./Popup";
import Link from "next/link";
export default function NavbarFactions(props: any) {
  const units = props.units;
  const roles = props.roles;
  //   const faction = "ork";
  return (
    <>
      {/* <NavbarPopup units={units} roles={roles} faction={faction} /> */}
      <div className="dropdown inline-block relative">
        <button className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
          <span>Imperium</span>
        </button>
        <ul className="dropdown-content absolute hidden text-gray-700 pt-1">
          <li className="dropdown">
            <a
              className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
              href="#"
            >
              <Link href="/factions/AS">Adepta Sororitas</Link>
            </a>
            <ul className="dropdown-content absolute hidden text-gray-700 pl-0 ml-24 -mt-10">
              <li>
                <NavbarPopup units={units} roles={roles} faction={"AS"} />
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a
              className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
              href="#"
            >
              <Link href="/factions/AC">Adeptus Custodes</Link>
            </a>
            <ul className="dropdown-content absolute hidden text-gray-700 pl-0 ml-24 -mt-10">
              <li>
                <NavbarPopup units={units} roles={roles} faction={"AC"} />
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a
              className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
              href="#"
            >
              <Link href="/factions/AdM">Adeptus Mechanicus</Link>
            </a>
            <ul className="dropdown-content absolute hidden text-gray-700 pl-0 ml-24 -mt-10">
              <li>
                <NavbarPopup units={units} roles={roles} faction={"AM"} />
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a
              className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
              href="#"
            >
              <Link href="/factions/AoI">Agents of the Imperium</Link>
            </a>
            <ul className="dropdown-content absolute hidden text-gray-700 pl-0 ml-24 -mt-10">
              <li>
                <NavbarPopup units={units} roles={roles} faction={"AoI"} />
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a
              className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
              href="#"
            >
              <Link href="/factions/AM">Astra Militarum</Link>
            </a>
            <ul className="dropdown-content absolute hidden text-gray-700 pl-0 ml-24 -mt-10">
              <li>
                <NavbarPopup units={units} roles={roles} faction={"AM"} />
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a
              className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
              href="#"
            >
              <Link href="/factions/GK">Grey Knights</Link>
            </a>
            <ul className="dropdown-content absolute hidden text-gray-700 pl-0 ml-24 -mt-10">
              <li>
                <NavbarPopup units={units} roles={roles} faction={"GK"} />
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a
              className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
              href="#"
            >
              <Link href="/factions/QI">Imperial Knights</Link>
            </a>
            <ul className="dropdown-content absolute hidden text-gray-700 pl-0 ml-24 -mt-10">
              <li>
                <NavbarPopup units={units} roles={roles} faction={"QI"} />
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a
              className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
              href="#"
            >
              <Link href="/factions/RT">Rogue Traders</Link>
            </a>
            <ul className="dropdown-content absolute hidden text-gray-700 pl-0 ml-24 -mt-10">
              <li>
                <NavbarPopup units={units} roles={roles} faction={"RT"} />
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a
              className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
              href="#"
            >
              <Link href="/factions/SM">Space Marines</Link>
            </a>
            <ul className="dropdown-content absolute hidden text-gray-700 pl-0 ml-24 -mt-10">
              <li>
                <NavbarPopup units={units} roles={roles} faction={"SM"} />
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a
              className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
              href="#"
            >
              <Link href="/factions/TL">Titan Legions</Link>
            </a>
            <ul className="dropdown-content absolute hidden text-gray-700 pl-0 ml-24 -mt-10">
              <li>
                <NavbarPopup units={units} roles={roles} faction={"TL"} />
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="dropdown inline-block relative">
        <button className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
          <span>Chaos</span>
        </button>
        <ul className="dropdown-content absolute hidden text-gray-700 pt-1">
          <li className="dropdown">
            <a
              className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
              href="#"
            >
              <Link href="/factions/CD">Chaos Daemons</Link>
            </a>
            <ul className="dropdown-content absolute hidden text-gray-700 pl-0 ml-24 -mt-10">
              <li>
                <NavbarPopup units={units} roles={roles} faction={"CD"} />
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a
              className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
              href="#"
            >
              <Link href="/factions/CK">Chaos Knights</Link>
            </a>
            <ul className="dropdown-content absolute hidden text-gray-700 pl-0 ml-24 -mt-10">
              <li>
                <NavbarPopup units={units} roles={roles} faction={"CK"} />
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a
              className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
              href="#"
            >
              <Link href="/factions/CSM">Chaos Space Marines</Link>
            </a>
            <ul className="dropdown-content absolute hidden text-gray-700 pl-0 ml-24 -mt-10">
              <li>
                <NavbarPopup units={units} roles={roles} faction={"CSM"} />
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a
              className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
              href="#"
            >
              <Link href="/factions/DG">Death Guard</Link>
            </a>
            <ul className="dropdown-content absolute hidden text-gray-700 pl-0 ml-24 -mt-10">
              <li>
                <NavbarPopup units={units} roles={roles} faction={"DG"} />
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a
              className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
              href="#"
            >
              <Link href="/factions/HTL">Heretic Titan Legions</Link>
            </a>
            <ul className="dropdown-content absolute hidden text-gray-700 pl-0 ml-24 -mt-10">
              <li>
                <NavbarPopup units={units} roles={roles} faction={"HTL"} />
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a
              className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
              href="#"
            >
              <Link href="/factions/RaH">Renegades and Heretics</Link>
            </a>
            <ul className="dropdown-content absolute hidden text-gray-700 pl-0 ml-24 -mt-10">
              <li>
                <NavbarPopup units={units} roles={roles} faction={"RaH"} />
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a
              className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
              href="#"
            >
              <Link href="/factions/TS">Thousand Sons</Link>
            </a>
            <ul className="dropdown-content absolute hidden text-gray-700 pl-0 ml-24 -mt-10">
              <li>
                <NavbarPopup units={units} roles={roles} faction={"TS"} />
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a
              className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
              href="#"
            >
              <Link href="/factions/WE">World Eaters</Link>
            </a>
            <ul className="dropdown-content absolute hidden text-gray-700 pl-0 ml-24 -mt-10">
              <li>
                <NavbarPopup units={units} roles={roles} faction={"WE"} />
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="dropdown inline-block relative">
        <button className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
          <span>Xenos</span>
        </button>
        <ul className="dropdown-content absolute hidden text-gray-700 pt-1">
          <li className="dropdown">
            <a
              className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
              href="#"
            >
              <Link href="/factions/AE">Aeldari</Link>
            </a>
            <ul className="dropdown-content absolute hidden text-gray-700 pl-0 ml-24 -mt-10">
              <li>
                <NavbarPopup units={units} roles={roles} faction={"AE"} />
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a
              className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
              href="#"
            >
              <Link href="/factions/DRU">Drukhari</Link>
            </a>
            <ul className="dropdown-content absolute hidden text-gray-700 pl-0 ml-24 -mt-10">
              <li>
                <NavbarPopup units={units} roles={roles} faction={"DRU"} />
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a
              className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
              href="#"
            >
              <Link href="/factions/GC">Genestealer Cults</Link>
            </a>
            <ul className="dropdown-content absolute hidden text-gray-700 pl-0 ml-24 -mt-10">
              <li>
                <NavbarPopup units={units} roles={roles} faction={"GC"} />
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a
              className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
              href="#"
            >
              <Link href="/factions/LoV">Leagues of Votann</Link>
            </a>
            <ul className="dropdown-content absolute hidden text-gray-700 pl-0 ml-24 -mt-10">
              <li>
                <NavbarPopup units={units} roles={roles} faction={"Lov"} />
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a
              className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
              href="#"
            >
              <Link href="/factions/NEC">Necrons</Link>
            </a>
            <ul className="dropdown-content absolute hidden text-gray-700 pl-0 ml-24 -mt-10">
              <li>
                <NavbarPopup units={units} roles={roles} faction={"NEC"} />
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a
              className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
              href="#"
            >
              <Link href="/factions/ORK">Orks</Link>
            </a>
            <ul className="dropdown-content absolute hidden text-gray-700 pl-0 ml-24 -mt-10">
              <li>
                <NavbarPopup units={units} roles={roles} faction={"ORK"} />
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a
              className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
              href="#"
            >
              <Link href="/factions/TAU">T’au Empire</Link>
            </a>
            <ul className="dropdown-content absolute hidden text-gray-700 pl-0 ml-24 -mt-10">
              <li>
                <NavbarPopup units={units} roles={roles} faction={"TAU"} />
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a
              className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
              href="#"
            >
              <Link href="/factions/TYR">Tyranids</Link>
            </a>
            <ul className="dropdown-content absolute hidden text-gray-700 pl-0 ml-24 -mt-10">
              <li>
                <NavbarPopup units={units} roles={roles} faction={"TYR"} />
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
}
