"use client";

import { useEffect, useState } from "react";

export default function AdminPage() {

  const [allowed, setAllowed] = useState(false);

  const [loginUser, setLoginUser] = useState("");
  const [loginPass, setLoginPass] = useState("");

  const [newUser, setNewUser] = useState("");
  const [newPass, setNewPass] = useState("");

  const [title, setTitle] = useState("");
  const [cardTitle, setCardTitle] = useState("");
  const [cardImage, setCardImage] = useState("");
  const [cardLink, setCardLink] = useState("");
  const [image, setImage] = useState("");
  const [link, setLink] = useState("");

  useEffect(() => {

    const savedUser = localStorage.getItem("admin_user");
    const savedPass = localStorage.getItem("admin_pass");

    if (!savedUser) {
      localStorage.setItem("admin_user", "admin");
    }

    if (!savedPass) {
      localStorage.setItem("admin_pass", "12345");
    }

  }, []);

  function login() {

    const savedUser = localStorage.getItem("admin_user");
    const savedPass = localStorage.getItem("admin_pass");

    if (
      loginUser === savedUser &&
      loginPass === savedPass
    ) {

      setAllowed(true);

    } else {

      alert("Wrong username or password");

    }

  }

  function changeAdmin() {

    if (!newUser || !newPass) {

      alert("Fill all fields");
      return;

    }

    localStorage.setItem("admin_user", newUser);
    localStorage.setItem("admin_pass", newPass);

    alert("Admin account updated");

    setNewUser("");
    setNewPass("");

  }

  if (!allowed) {

    return (

      <main className="min-h-screen bg-[#050816] text-white flex items-center justify-center px-6">

        <div className="w-full max-w-md bg-[#0F172A] border border-white/10 rounded-3xl p-10">

          <h1 className="text-5xl font-black mb-8 text-center">
            ADMIN LOGIN
          </h1>

          <input
            type="text"
            placeholder="Username"
            value={loginUser}
            onChange={(e) => setLoginUser(e.target.value)}
            className="w-full mb-4 bg-[#111827] border border-white/10 rounded-xl p-4"
          />

          <input
            type="password"
            placeholder="Password"
            value={loginPass}
            onChange={(e) => setLoginPass(e.target.value)}
            className="w-full mb-6 bg-[#111827] border border-white/10 rounded-xl p-4"
          />

          <button
            onClick={login}
            className="w-full bg-purple-600 hover:bg-purple-700 transition py-4 rounded-2xl text-xl font-bold"
          >
            LOGIN
          </button>

        </div>

      </main>

    );

  }

  return (

    <main className="min-h-screen bg-[#050816] text-white p-10">

      <div className="max-w-3xl mx-auto">

        <h1 className="text-6xl font-black mb-10">
          ADMIN PANEL
        </h1>

        <div className="bg-[#0F172A] border border-white/10 rounded-3xl p-8 mb-10">

          <h2 className="text-3xl font-bold mb-6">
            Change Admin Account
          </h2>

          <div className="space-y-4">

            <input
              placeholder="New Username"
              value={newUser}
              onChange={(e) => setNewUser(e.target.value)}
              className="w-full bg-[#111827] border border-white/10 rounded-xl p-4"
            />

            <input
              type="password"
              placeholder="New Password"
              value={newPass}
              onChange={(e) => setNewPass(e.target.value)}
              className="w-full bg-[#111827] border border-white/10 rounded-xl p-4"
            />

            <button
              onClick={changeAdmin}
              className="bg-green-600 hover:bg-green-700 transition px-8 py-4 rounded-2xl text-lg font-bold"
            >
              SAVE ADMIN
            </button>

          </div>

        </div>

        <div className="bg-[#0F172A] border border-white/10 rounded-3xl p-8 space-y-6">

          <div>

            <p className="mb-2 text-gray-400">
              Reklam Başlığı
            </p>

            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-[#111827] border border-white/10 rounded-xl p-4"
            />

          </div>

          <div>

            <p className="mb-2 text-gray-400">
              Görsel URL
            </p>

            <input
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="w-full bg-[#111827] border border-white/10 rounded-xl p-4"
            />

          </div>

          <div>

            <p className="mb-2 text-gray-400">
              Reklam Linki
            </p>

            <input
              value={link}
              onChange={(e) => setLink(e.target.value)}
              className="w-full bg-[#111827] border border-white/10 rounded-xl p-4"
            />

          </div>

          <button
            onClick={() => {

              localStorage.setItem(
                "heroAd",
                JSON.stringify({
                  title,
                  image,
                  link
                })
              );

              localStorage.setItem(
                "cardAd",
                JSON.stringify({
                  title: cardTitle,
                  image: cardImage,
                  link: cardLink
                })
              );

              alert("Advertisement Saved!");

            }}
            className="bg-purple-600 hover:bg-purple-700 transition px-8 py-4 rounded-2xl text-xl font-bold"
          >
            SAVE AD
          </button>

          <div className="border-t border-white/10 pt-10 mt-10">

            <h2 className="text-3xl font-bold mb-6">
              Game Card Advertisement
            </h2>

            <div className="space-y-6">

              <input
                placeholder="Card Title"
                value={cardTitle}
                onChange={(e) => setCardTitle(e.target.value)}
                className="w-full bg-[#111827] border border-white/10 rounded-xl p-4"
              />

              <input
                placeholder="Card Image URL"
                value={cardImage}
                onChange={(e) => setCardImage(e.target.value)}
                className="w-full bg-[#111827] border border-white/10 rounded-xl p-4"
              />

              <input
                placeholder="Card Link"
                value={cardLink}
                onChange={(e) => setCardLink(e.target.value)}
                className="w-full bg-[#111827] border border-white/10 rounded-xl p-4"
              />

            </div>

          </div>

        </div>

      </div>

    </main>

  );
}