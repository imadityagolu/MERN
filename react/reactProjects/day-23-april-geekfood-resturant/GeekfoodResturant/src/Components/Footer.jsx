import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";

function Footer() {
    return (
      <>
  
  {/* Footer */}
  <footer class="bg-gray-100">
  <div class="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
    <div class="flex justify-center text-teal-600 text-2xl">
      logoipsum
    </div>

    <p class="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
      consequuntur amet culpa cum itaque neque.
    </p>

    <ul class="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
      <li>
        <a class="text-gray-700 transition hover:text-gray-700/75" href="/">
          About
        </a>
      </li>

      <li>
        <a class="text-gray-700 transition hover:text-gray-700/75" href="/">
          Careers
        </a>
      </li>

      <li>
        <a class="text-gray-700 transition hover:text-gray-700/75" href="/">
          History
        </a>
      </li>

      <li>
        <a class="text-gray-700 transition hover:text-gray-700/75" href="/">
          Services
        </a>
      </li>

      <li>
        <a class="text-gray-700 transition hover:text-gray-700/75" href="/">
          Projects
        </a>
      </li>

      <li>
        <a class="text-gray-700 transition hover:text-gray-700/75" href="/">
          Blog
        </a>
      </li>
    </ul>

    <ul class="mt-12 flex justify-center gap-6 md:gap-8">
      <li>
        <a
          href="/"
          rel="noreferrer"
          target="_blank"
          class="text-gray-700 transition hover:text-gray-700/75"
        >
          <span class="sr-only">Facebook</span>
          <FaFacebook />
        </a>
      </li>

      <li>
        <a
          href="/"
          rel="noreferrer"
          target="_blank"
          class="text-gray-700 transition hover:text-gray-700/75"
        >
          <span class="sr-only">Instagram</span>
          <AiFillInstagram />
        </a>
      </li>

      <li>
        <a
          href="/"
          rel="noreferrer"
          target="_blank"
          class="text-gray-700 transition hover:text-gray-700/75"
        >
          <span class="sr-only">Twitter</span>
          <FaTwitter />
        </a>
      </li>

      <li>
        <a
          href="/"
          rel="noreferrer"
          target="_blank"
          class="text-gray-700 transition hover:text-gray-700/75"
        >
          <span class="sr-only">GitHub</span>
          <FaGithub />
        </a>
      </li>

      <li>
        <a
          href="/"
          rel="noreferrer"
          target="_blank"
          class="text-gray-700 transition hover:text-gray-700/75"
        >
          <span class="sr-only">Dribbble</span>
          <FaDribbble />
        </a>
      </li>
    </ul>
  </div>
</footer>

      </>
    )
  }
  
  export default Footer;