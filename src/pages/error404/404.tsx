import { Button } from "../../shared/components/Button"
import 'boxicons/css/boxicons.min.css';

export const Page404 = () => {
  return (
    <section>
      <div className="container flex items-center justify-center min-h-screen px-6 py-12 mx-auto">
        <div className="w-full ">
          <div className="flex flex-col items-center max-w-lg mx-auto text-center">
            <p className="text-sm font-medium text-blue-500">404 error</p>
            <h1 className="mt-3 text-2xl font-semibold text-gray-800">We lost this page</h1>
            <p className="mt-4 text-gray-500">We searched high and low, but couldn’t find what you’re looking for.Let’s find a better place for you to go.</p>

            <div className="flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
              <Button
                variant="secondary"
                useAnimation
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 rtl:rotate-180">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                  </svg>
                }
              >

                <span>Go back</span>
              </Button>

              <Button
                variant="primary"
                useAnimation
              >
                Take me home
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}