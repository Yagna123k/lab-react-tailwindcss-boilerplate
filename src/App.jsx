export default function App() {
  return (
    <>
      <div className="w-100 bg-kalvium-red flex justify-between items-center p-5" >
        <div className="flex gap-10 items-center ...">
          <h1 className="font-bold text-white text-3xl	">Kalvium</h1>
          <p className="text-gray-300 font-semibold">About Us</p>
          <p className="text-gray-300 font-semibold">Contacts</p>
          <p className="text-gray-300 font-semibold">Courses</p>
        </div>
        <div>
          <button className="p-1 border-white border-2 rounded-md	py-1 px-5 text-white">Login</button>
        </div>
      </div>
      <div className="mx-auto w-5/6 items-start mt-4" >
        <button type="button" class="text-white bg-blue-500 rounded p-2 font-bold px-4">Button One</button>
        <div class="p-4 my-4 text-lg text-red-800 rounded bg-red-5 bg-red-100 dark:text-red-600 border-red-500 border " role="alert">
          <span class="font-bold">Alert!</span> This is awesome!
        </div>

        <div className="flex items-center shadow-xl w-fit p-4 mx-auto mt-4">
          <img src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png" alt="Kalvium" />
          <div className="ml-5">
            <h1 className="font-medium text-xl">Kalvium Store</h1>
            <p className="text-gray-600 font-medium">You have a new course</p>
          </div>
        </div>
      </div>
      <div className="w-100 bg-gray-200 text-center p-4">
        <p className="text-gray-800">©️ 2024 Copyright: <span className="font-medium">Kalvium</span> </p>
      </div>
    </>
  )
}