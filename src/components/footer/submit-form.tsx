import { useState } from "react"

function SubmitForm() {
  const [email, setEmail] = useState("");
  return (
    <form
      className="mt-4 sm:flex sm:max-w-md"
      onSubmit={(e) => {
        fetch("/api/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        })
          .then((res) => res.json())
          .then(() => {
            return "";
          });
        e.preventDefault();
      }}
    >
      <label className="sr-only" htmlFor="email-address">
        Email address
      </label>
      <input
        autoComplete="email"
        className="border-[#666666] dark:border-[#888888] w-full min-w-0 px-4 py-2 text-base text-gray-900 placeholder-gray-500 bg-white border rounded-md appearance-none dark:text-white sm:text-sm dark:bg-transparent focus:outline-none focus:ring-2 focus:ring-gray-800 dark:focus:border-white focus:placeholder-gray-400"
        id="email-address"
        name="email-address"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        placeholder="you@example.com"
        required
        type="email"
        value={email}
      />
      <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
        <button
          className="flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white bg-black border border-transparent rounded-md dark:bg-white dark:text-black sm:text-sm betterhover:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-800 dark:focus:ring-white dark:betterhover:hover:bg-gray-300"
          type="submit"
        >
          Subscribe
        </button>
      </div>
    </form>
  )
}

export default SubmitForm