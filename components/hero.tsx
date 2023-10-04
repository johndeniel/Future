import Link from "next/link"

export default function hero() {
  return (
    <section className="w-full">
      <main className="container mx-auto px-4 md:px-6 py-8">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Latest Project</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <img
                alt="Viewport"
                className="w-full h-64 object-cover object-center rounded-lg"
                height="400"
                src="https://res.cloudinary.com/dr4uv6fs6/image/upload/v1696398826/zinu0im90agdyvto5v99.jpg"
                width="600"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-xl font-bold mb-2">Viewport</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                Bulacan State University Web Page base on Nextjs. I am creating innovative online solutions to enhance user experiences and drive digital success. 
                Server-Side Rendering (SSR), Static Site Generation (SSG), Routing,
                API Routes, Data Fetching. Authentication,Internationalization, Deployment.
              </p>
              <Link className="text-blue-500 hover:text-blue-700 mt-4" href="#">
                Read More
              </Link>
            </div>
          </div>
        </section>


        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Article</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div>
              <img
                alt="Politics Story Image"
                className="w-full h-64 object-cover object-center rounded-lg"
                height="400"
                src="https://getshogun.com/wp-content/uploads/2022/07/61d5e1b6ae8db76cba5ac2fe_Coming-Soon-Page.jpeg"
                width="600"
              />
              <h3 className="text-xl font-bold mb-2 mt-4">Lorem ipsum dolor sit amet</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Link className="text-blue-500 hover:text-blue-700 mt-4" href="#">
                Read More
              </Link>
            </div>

            <div>
              <img
                alt="Politics Story Image"
                className="w-full h-64 object-cover object-center rounded-lg"
                height="400"
                src="https://getshogun.com/wp-content/uploads/2022/07/61d5e1b6ae8db76cba5ac2fe_Coming-Soon-Page.jpeg"
                width="600"
              />
              <h3 className="text-xl font-bold mb-2 mt-4">Lorem ipsum dolor sit amet</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Link className="text-blue-500 hover:text-blue-700 mt-4" href="#">
                Read More
              </Link>
            </div>
            
            <div>
              <img
                alt="Politics Story Image"
                className="w-full h-64 object-cover object-center rounded-lg"
                height="400"
                src="https://getshogun.com/wp-content/uploads/2022/07/61d5e1b6ae8db76cba5ac2fe_Coming-Soon-Page.jpeg"
                width="600"
              />
              <h3 className="text-xl font-bold mb-2 mt-4">Lorem ipsum dolor sit amet</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Link className="text-blue-500 hover:text-blue-700 mt-4" href="#">
                Read More
              </Link>
            </div>
            
          </div>
        </section>


        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Business</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div>
              <img
                alt="Business Story Image"
                className="w-full h-64 object-cover object-center rounded-lg"
                height="400"
                src="https://getshogun.com/wp-content/uploads/2022/07/61d5e1b6ae8db76cba5ac2fe_Coming-Soon-Page.jpeg"
                width="600"
              />
              <h3 className="text-xl font-bold mb-2 mt-4">Lorem ipsum dolor sit amet</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Link className="text-blue-500 hover:text-blue-700 mt-4" href="#">
                Read More
              </Link>
            </div>

            <div>
              <img
                alt="Business Story Image"
                className="w-full h-64 object-cover object-center rounded-lg"
                height="400"
                src="https://getshogun.com/wp-content/uploads/2022/07/61d5e1b6ae8db76cba5ac2fe_Coming-Soon-Page.jpeg"
                width="600"
              />
              <h3 className="text-xl font-bold mb-2 mt-4">Lorem ipsum dolor sit amet</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Link className="text-blue-500 hover:text-blue-700 mt-4" href="#">
                Read More
              </Link>
            </div>

            <div>
              <img
                alt="Business Story Image"
                className="w-full h-64 object-cover object-center rounded-lg"
                height="400"
                src="https://getshogun.com/wp-content/uploads/2022/07/61d5e1b6ae8db76cba5ac2fe_Coming-Soon-Page.jpeg"
                width="600"
              />
              <h3 className="text-xl font-bold mb-2 mt-4">Lorem ipsum dolor sit amet</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Link className="text-blue-500 hover:text-blue-700 mt-4" href="#">
                Read More
              </Link>
            </div>

          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Next.js</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div>
              <img
                alt="Tech Story Image"
                className="w-full h-64 object-cover object-center rounded-lg"
                height="400"
                src="https://getshogun.com/wp-content/uploads/2022/07/61d5e1b6ae8db76cba5ac2fe_Coming-Soon-Page.jpeg"
                width="600"
              />
              <h3 className="text-xl font-bold mb-2 mt-4">Lorem ipsum dolor sit amet</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Link className="text-blue-500 hover:text-blue-700 mt-4" href="#">
                Read More
              </Link>
            </div>

            <div>
              <img
                alt="Tech Story Image"
                className="w-full h-64 object-cover object-center rounded-lg"
                height="400"
                src="https://getshogun.com/wp-content/uploads/2022/07/61d5e1b6ae8db76cba5ac2fe_Coming-Soon-Page.jpeg"
                width="600"
              />
              <h3 className="text-xl font-bold mb-2 mt-4">Lorem ipsum dolor sit amet</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Link className="text-blue-500 hover:text-blue-700 mt-4" href="#">
                Read More
              </Link>
            </div>

            <div>
              <img
                alt="Tech Story Image"
                className="w-full h-64 object-cover object-center rounded-lg"
                height="400"
                src="https://getshogun.com/wp-content/uploads/2022/07/61d5e1b6ae8db76cba5ac2fe_Coming-Soon-Page.jpeg"
                width="600"
              />
              <h3 className="text-xl font-bold mb-2 mt-4">Lorem ipsum dolor sit amet</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Link className="text-blue-500 hover:text-blue-700 mt-4" href="#">
                Read More
              </Link>
            </div>

          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Python</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div>
              <img
                alt="Culture Story Image"
                className="w-full h-64 object-cover object-center rounded-lg"
                height="400"
                src="https://getshogun.com/wp-content/uploads/2022/07/61d5e1b6ae8db76cba5ac2fe_Coming-Soon-Page.jpeg"
                width="600"
              />
              <h3 className="text-xl font-bold mb-2 mt-4">Lorem ipsum dolor sit amet</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Link className="text-blue-500 hover:text-blue-700 mt-4" href="#">
                Read More
              </Link>
            </div>

            <div>
              <img
                alt="Culture Story Image"
                className="w-full h-64 object-cover object-center rounded-lg"
                height="400"
                src="https://getshogun.com/wp-content/uploads/2022/07/61d5e1b6ae8db76cba5ac2fe_Coming-Soon-Page.jpeg"
                width="600"
              />
              <h3 className="text-xl font-bold mb-2 mt-4">Lorem ipsum dolor sit amet</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Link className="text-blue-500 hover:text-blue-700 mt-4" href="#">
                Read More
              </Link>
            </div>

            <div>
              <img
                alt="Culture Story Image"
                className="w-full h-64 object-cover object-center rounded-lg"
                height="400"
                src="https://getshogun.com/wp-content/uploads/2022/07/61d5e1b6ae8db76cba5ac2fe_Coming-Soon-Page.jpeg"
                width="600"
              />
              <h3 className="text-xl font-bold mb-2 mt-4">Lorem ipsum dolor sit amet</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Link className="text-blue-500 hover:text-blue-700 mt-4" href="#">
                Read More
              </Link>
            </div>

          </div>
        </section>


        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Java</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <img
                alt="Sports Story Image"
                className="w-full h-64 object-cover object-center rounded-lg"
                height="400"
                src="https://getshogun.com/wp-content/uploads/2022/07/61d5e1b6ae8db76cba5ac2fe_Coming-Soon-Page.jpeg"
                width="600"
              />
              <h3 className="text-xl font-bold mb-2 mt-4">Lorem ipsum dolor sit amet</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Link className="text-blue-500 hover:text-blue-700 mt-4" href="#">
                Read More
              </Link>
            </div>
            <div>
              <img
                alt="Sports Story Image"
                className="w-full h-64 object-cover object-center rounded-lg"
                height="400"
                src="https://getshogun.com/wp-content/uploads/2022/07/61d5e1b6ae8db76cba5ac2fe_Coming-Soon-Page.jpeg"
                width="600"
              />
              <h3 className="text-xl font-bold mb-2 mt-4">Lorem ipsum dolor sit amet</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Link className="text-blue-500 hover:text-blue-700 mt-4" href="#">
                Read More
              </Link>
            </div>
            <div>
              <img
                alt="Sports Story Image"
                className="w-full h-64 object-cover object-center rounded-lg"
                height="400"
                src="https://getshogun.com/wp-content/uploads/2022/07/61d5e1b6ae8db76cba5ac2fe_Coming-Soon-Page.jpeg"
                width="600"
              />
              <h3 className="text-xl font-bold mb-2 mt-4">Lorem ipsum dolor sit amet</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Link className="text-blue-500 hover:text-blue-700 mt-4" href="#">
                Read More
              </Link>
            </div>
          </div>
        </section>
      </main>
    </section>
  )
}
