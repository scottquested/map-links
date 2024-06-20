import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 md:p-24">
      <h1 className="text-2xl mb-4">Map links</h1>
      <h2 className="mb-8">
        Lat: <strong>45.464203</strong> Lng: <strong>9.189982</strong>
      </h2>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <li className="flex flex-col justify-center items-center border p-4">
          <a
            href="https://maps.apple.com?ll=45.464203,9.189982"
            className="flex flex-col justify-center items-center"
          >
            <Image
              src="/apple.svg"
              alt="Apple Logo"
              width={100}
              height={24}
              priority
              className="mb-4"
            />
            Apple maps:{" "}
            <span className="text-blue-400">https://maps.apple.com</span>
          </a>
        </li>
        <li className="flex flex-col justify-center items-center border p-4">
          <a
            href="https://maps.google.com?ll=45.464203,9.189982"
            className="flex flex-col justify-center items-center"
          >
            <Image
              src="/google.svg"
              alt="Google Logo"
              width={100}
              height={24}
              priority
              className="mb-4"
            />
            Google maps:{" "}
            <span className="text-blue-400">https://maps.google.com</span>
          </a>
        </li>
        <li className="flex flex-col justify-center items-center border p-4">
          <a
            href="https://waze.com/ul?ll=45.464203,9.189982"
            className="flex flex-col justify-center items-center"
          >
            <Image
              src="/waze.svg"
              alt="Waze Logo"
              width={100}
              height={24}
              priority
              className="mb-4"
            />
            Waze:
            <span className="text-blue-400">https://waze.com/ul</span>
          </a>
        </li>
      </ul>
    </main>
  );
}
