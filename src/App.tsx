import { useState } from "react";
import { ChevronDown } from "./Components/Chevron-down";
import { ChevronRight } from "./Components/Chevron-right";
import { DocumentIcon } from "./Components/Document";
import { FolderIcon } from "./Components/Folder";

let folders: FolderType[] = [
  {
    name: "Home",
    folders: [
      {
        name: "Movies",
        folders: [
          {
            name: "Action",
            folders: [
              {
                name: "2000s",
                folders: [{ name: "hello" }, { name: "hello returns" }],
              },
              {
                name: "2010s",
                folders: [],
              },
            ],
          },
          {
            name: "Comedy",
            folders: [{ name: "2000s", folders: [] }],
          },
        ],
      },
      { name: "Music", folders: [] },
      { name: "Pictures", folders: [] },
      { name: "Documents", folders: [{ name: "passwords.txt" }] },
    ],
  },
];

interface FolderType {
  name: string;
  folders?: FolderType[];
}

function App() {
  return (
    <div className="p-8 max-w-sm mx-auto">
      <ul>
        {folders.map((folder) => (
          <Folder folder={folder} key={folder.name} />
        ))}
      </ul>
    </div>
  );
}

function Folder({ folder }: { folder: FolderType }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <li className="my-1.5" key={folder.name}>
      <span className="flex items-center gap-1.5">
        {folder.folders ? (
          <div className="flex items-center gap-1.5">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <ChevronRight /> : <ChevronDown />}
            </button>{" "}
            <FolderIcon />{" "}
          </div>
        ) : (
          <DocumentIcon />
        )}
        {folder.name}
      </span>
      {isOpen && (
        <ul className="pl-6">
          {folder.folders?.map((folder) => (
            <Folder folder={folder} key={folder.name} />
          ))}
        </ul>
      )}
    </li>
  );
}

export default App;
