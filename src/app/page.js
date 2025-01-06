"use client";

import { useState } from "react";
import Books from "./components/Books";
import Music from "./components/Music";
import Resources from "./components/Resources";
import AboutMe from "./components/AboutMe";
import "./styles/globals.css";

export default function HomePage() {
  const [activeSection, setActiveSection] = useState("books");

  const renderContent = () => {
    switch (activeSection) {
      case "books":
        return <Books />;
      case "music":
        return <Music />;
      case "resources":
        return <Resources />;
      default:
        return <Books />;
    }
  };

  return (
    <div className=" container mx-auto px-4 py-8">
      <header className="text-center">
        <h1 className="head text-red-500">Camino Elevado</h1>
        <div className="columns-2 gap-5">
          <p className="intro">
            Esta colleccion de recursos es un proyecto personal, con el fin de
            compartir conocimiento y experiencias personales que forman parte de
            mi macrovision del amor, el universo y el mundo.
          </p>
          <img></img>
        </div>
      </header>

      <nav className="flex justify-center space-x-4 my-6">
        <button
          className={`px-4 py-2 rounded ${
            activeSection === "books"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-600"
          }`}
          onClick={() => setActiveSection("books")}
        >
          Books
        </button>
        <button
          className={`px-4 py-2 rounded ${
            activeSection === "music"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-600"
          }`}
          onClick={() => setActiveSection("music")}
        >
          Music
        </button>
        <button
          className={`px-4 py-2 rounded ${
            activeSection === "resources"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-600"
          }`}
          onClick={() => setActiveSection("resources")}
        >
          Resources
        </button>
      </nav>

      <main className="bg-white shadow-md rounded-lg p-4">
        {renderContent()}
      </main>

      <footer className="mt-8">
        <AboutMe />
      </footer>
    </div>
  );
}
