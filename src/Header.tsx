import React from 'react'
import LoginModal from './LoginModal'

export default function Header() {
    
    return (
        <>
            <LoginModal />
            <header
                id="header"
                className="is-desktop is-on-home header"
                data-v-76127e4a=""
            >
                <h1 className="sr-only" data-v-76127e4a="">
                    خرید آنلاین بلیط هواپیما، قطار و اتوبوس
                </h1>
                <div
                    className="a-container px-0 md:px-5 max-w-[91rem]"
                    data-v-76127e4a=""
                >
                    <div className="header__main" data-v-76127e4a="">
                        <nav
                            className="flex h-full py-1 px-4 items-center md:py-0 md:px-0"
                            aria-label="محصولات"
                            data-v-76127e4a=""
                        >
                            <a
                                aria-current="page"
                                href="https://www.alibaba.ir/"
                                className="router-link-active router-link-exact-active flex ml-6 items-center lg:ml-9"
                                aria-label="صفحه اول"
                                data-v-76127e4a=""
                            >
                                <div
                                    className="flex"
                                    aria-label="لوگوی علی‌بابا"
                                    height="48px"
                                    data-v-76127e4a=""
                                >
                                    <img
                                        height={48}
                                        width={160}
                                        alt="لوگوی علی بابا"
                                        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMyIiBoZWlnaHQ9IjQ4IiB2aWV3Qm94PSIwIDAgMTMyIDQ4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNODMuODkxOCAyOS4xMDk1QzgzLjg5MTggMzMuMzQyOCA4MS44NTUgMzcuMzA4NSA3Ny4xMDU0IDM3LjMwODVDNzUuMzE3NCAzNy4zMDg1IDc0LjA2MDIgMzYuNjk4NiA3My4yMDg3IDM1Ljg1NTdMNzIuODE4OSAzNy4zMDg1SDcwLjUwNTlWMTYuMzkyNEg3My40NDAyVjI5LjMwOEM3My40NDAyIDMxLjkyNDUgNzQuMDczMiAzNC43NTk2IDc3LjIxMTggMzQuNzQzOEM4MC4yNTU1IDM0LjcyOTQgODAuOTI0NCAzMS43NzM0IDgwLjkyNDQgMjkuMzA4QzgwLjkyNDQgMjYuODQyNSA4MC4yNTQxIDIzLjkwNTMgNzcuMjEwNCAyMy44OTIzQzc2LjU3MTUgMjMuODk5NSA3NS45Mzg3IDI0LjAxNzggNzUuMzQwNCAyNC4yNDE5VjIxLjg1NjlDNzYuMTUxMSAyMS41MzQgNzcuMDEyNiAyMS4zNTc3IDc3Ljg4NSAyMS4zMzYyQzgyLjA0NDkgMjEuMzM2MiA4My44OTE4IDI1LjQ0NTggODMuODkxOCAyOS4xMDk1Wk01Ny4yOTgyIDM3LjMwODVINjAuMjM0MVYxNi4zOTI0SDU3LjI5ODJWMzcuMzA4NVpNMTA5LjgwOSAyMS4zNDJDMTA4LjkzNyAyMS4zNjM1IDEwOC4wNzUgMjEuNTM5OCAxMDcuMjY1IDIxLjg2MjdWMjQuMjQ3NkMxMDcuODYzIDI0LjAyMzQgMTA4LjQ5NiAyMy45MDUxIDEwOS4xMzUgMjMuODk4MUMxMTIuMTc4IDIzLjkxMSAxMTIuODQ5IDI2Ljg0OTcgMTEyLjg0OSAyOS4zMTM3QzExMi44NDkgMzEuNzc3OCAxMTIuMTc3IDM0LjczMDkgMTA5LjEyOSAzNC43NDM4QzEwNS45OSAzNC43NTk2IDEwNS4zNTcgMzEuOTI0NSAxMDUuMzU3IDI5LjMwOFYxNi4zOTI0SDEwMi40MjNWMzcuMzA5OUgxMDQuNzM2TDEwNS4xMjQgMzUuODU3MUMxMDUuOTc3IDM2LjcwMDEgMTA3LjIzNSAzNy4zMDk5IDEwOS4wMjMgMzcuMzA5OUMxMTMuNzY5IDM3LjMwOTkgMTE1LjgwOSAzMy4zNDI4IDExNS44MDkgMjkuMTEwOUMxMTUuODA5IDI1LjQ0NTggMTEzLjk2MiAyMS4zMzYyIDEwOS44MDkgMjEuMzM2MlYyMS4zNDJaTTEzMC42NjcgMzMuMTgzMVYyNy43MDEzQzEzMC42NjcgMjMuMzg2IDEyNy44ODUgMjEuMzQ5MiAxMjQuNjc4IDIxLjM0OTJDMTIxLjI5MSAyMS4zNDkyIDExOC45MSAyMy41NSAxMTguOTEgMjMuNTVMMTIwLjMxMSAyNS41NTIzQzEyMC42MjggMjUuMjk5MSAxMjIuMzExIDI0LjAzOSAxMjQuNTE3IDI0LjAzOUMxMjYuNCAyNC4wMzkgMTI3LjkyNiAyNC45MDIxIDEyNy45MjYgMjcuNzk0OFYzMS4yMDI0QzEyNy45MjYgMzMuNzQ5OCAxMjUuMzM3IDM0Ljg0MyAxMjMuNTkxIDM0Ljg0M0MxMjIuMDM5IDM0Ljg0MyAxMjAuODk4IDM0LjIyMTYgMTIwLjg5OCAzMi44NDc5QzEyMC44OTggMzAuNTIyIDEyNC4wOTIgMjkuODI3MyAxMjYuMDE5IDI5LjkyNTFWMjcuNjgyNkMxMjEuNzk0IDI3LjQ2NTQgMTE4LjAwNiAyOS4yMjE3IDExOC4wMDYgMzMuMDIzNEMxMTguMDA2IDM1LjY2NzMgMTIwLjA1NyAzNy4zMDQyIDEyMy4xMjkgMzcuMzA0MkMxMjUuNDMxIDM3LjMwNDIgMTI3LjQyIDM2LjQxNjcgMTI4LjM5MiAzNS40NDcyQzEyOC45MTMgMzYuNzc5MiAxMzAuMzI3IDM3LjMwNDIgMTMxLjQyNSAzNy4zMDQyTDEzMiAzNS4xNTgxQzEzMS4wNzcgMzQuOTU2NyAxMzAuNjcxIDM0LjUxNTEgMTMwLjY3MSAzMy4xNzc0TDEzMC42NjcgMzMuMTgzMVpNOTguNzQ5MyAzMy4xODMxVjI3LjcwMTNDOTguNzQ5MyAyMy4zODYgOTUuOTY3NCAyMS4zNDkyIDkyLjc2MTIgMjEuMzQ5MkM4OS4zNzM3IDIxLjM0OTIgODYuOTkzMSAyMy41NSA4Ni45OTMxIDIzLjU1TDg4LjM5NTYgMjUuNTUyM0M4OC43MTA2IDI1LjI5OTEgOTAuMzkzNSAyNC4wMzkgOTIuNjAwMSAyNC4wMzlDOTQuNDgzIDI0LjAzOSA5Ni4wMTA2IDI0LjkwMjEgOTYuMDEwNiAyNy43OTQ4VjMxLjIwMjRDOTYuMDEwNiAzMy43NDk4IDkzLjQyMTQgMzQuODQzIDkxLjY3MzcgMzQuODQzQzkwLjEyMTcgMzQuODQzIDg4Ljk4MSAzNC4yMjE2IDg4Ljk4MSAzMi44NDc5Qzg4Ljk4MSAzMC41MjIgOTIuMTc0MyAyOS44MjczIDk0LjEwMTggMjkuOTI1MVYyNy42ODI2Qzg5Ljg3NzEgMjcuNDY1NCA4Ni4wODgzIDI5LjIyMTcgODYuMDg4MyAzMy4wMjM0Qzg2LjA4ODMgMzUuNjY3MyA4OC4xMzk1IDM3LjMwNDIgOTEuMjEyIDM3LjMwNDJDOTMuNTEzNSAzNy4zMDQyIDk1LjUwMjggMzYuNDE2NyA5Ni40NzUyIDM1LjQ0NzJDOTYuOTk1OSAzNi43NzkyIDk4LjQwOTkgMzcuMzA0MiA5OS41MDc0IDM3LjMwNDJMMTAwLjA4MyAzNS4xNTgxQzk5LjE1OTMgMzQuOTU2NyA5OC43NTM3IDM0LjUxNTEgOTguNzUzNyAzMy4xNzc0TDk4Ljc0OTMgMzMuMTgzMVpNNTMuNjI1OSAzMy4xODMxVjI3LjcwMTNDNTMuNjI1OSAyMy4zODYgNTAuODQ0IDIxLjM0OTIgNDcuNjM3OCAyMS4zNDkyQzQ0LjI1MDMgMjEuMzQ5MiA0MS44Njk3IDIzLjU1IDQxLjg2OTcgMjMuNTVMNDMuMjc2NSAyNS41NTIzQzQzLjU5MTUgMjUuMjk5MSA0NS4yNzU5IDI0LjAzOSA0Ny40ODEgMjQuMDM5QzQ5LjM2NTMgMjQuMDM5IDUwLjg5MTUgMjQuOTAyMSA1MC44OTE1IDI3Ljc5NDhWMzEuMjAyNEM1MC44OTE1IDMzLjc0OTggNDguMzAyMyAzNC44NDMgNDYuNTU0NiAzNC44NDNDNDUuMDA0IDM0Ljg0MyA0My44NjMzIDM0LjIyMTYgNDMuODYzMyAzMi44NDc5QzQzLjg2MzMgMzAuNTIyIDQ3LjA1NTIgMjkuODI3MyA0OC45ODQxIDI5LjkyNTFWMjcuNjgyNkM0NC43NTggMjcuNDcxMSA0MC45NzUgMjkuMjI3NCA0MC45NzUgMzMuMDI5MkM0MC45NzUgMzUuNjczIDQzLjAyNjIgMzcuMzA5OSA0Ni4wOTg3IDM3LjMwOTlDNDguNDAwMSAzNy4zMDk5IDUwLjM4OCAzNi40MjI0IDUxLjM2MDQgMzUuNDUyOUM1MS44ODI2IDM2Ljc4NDkgNTMuMjk1MSAzNy4zMDk5IDU0LjM5NDEgMzcuMzA5OUw1NC45Njk0IDM1LjE2MzhDNTQuMDM1OSAzNC45NTY3IDUzLjYzMzEgMzQuNTE1MSA1My42MzMxIDMzLjE3NzRMNTMuNjI1OSAzMy4xODMxWk02My44OTc3IDM3LjMxNTdINjYuODMyMVYyMS44MjI0SDYzLjg5NzdWMzcuMzE1N1pNNjMuODk3NyAxOS4zMzU0SDY2LjgzMjFWMTYuMzkyNEg2My44OTc3VjE5LjMzNTRaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMjcuMjMwOCAzNS43NTc5QzI3LjA4NyAzNi4wMTgyIDI2Ljc0MDMgMzYuMTM2MiAyNi40MzI1IDM2LjIyMzlMMjIuOTI0MiAzNy4yMTVDMjIuNjE2NCAzNy4zMDEzIDIyLjIzMjMgMzcuMzcxOCAyMS45NzQ4IDM3LjIyNTFDMjEuNzE3MyAzNy4wNzg0IDIxLjU4OTMgMzYuNzE0NCAyMS41MDczIDM2LjQwOEMxNi40MTI0IDE3LjQwMzYgMTUuNzA5IDEzLjMwNjkgMTMuNjU5MyAxMy4zMDY5QzExLjYwOTUgMTMuMzA2OSAxMC45MTE5IDE3LjQwMzYgNS44MTEyNCAzNi40MDhDNS43MjkyNSAzNi43MTQ0IDUuNTk4MzUgMzcuMDc4NCA1LjM0Mzc1IDM3LjIyNTFDNS4wODkxNSAzNy4zNzE4IDQuNzAwNzcgMzcuMzAxMyA0LjM5Mjk1IDM3LjIxNUwwLjg4NDYyOSAzNi4yMjM5QzAuNTc2ODA2IDM2LjEzNjIgMC4yMzE1ODcgMzYuMDE4MiAwLjA4Nzc0NDQgMzUuNzU3OUMtMC4wNTYwOTgyIDM1LjQ5NzUgMC4wMDcxOTI1NCAzNS4xMTYzIDAuMDg3NzQ0NCAzNC44MTg2QzUuMzAyMDQgMTUuNDY3NSA4LjIxNDg0IDEwIDEzLjY1OTMgMTBDMTkuMTAzNyAxMCAyMi4wMjIzIDE1LjQ2NiAyNy4yMjk0IDM0LjgxODZDMjcuMzA5OSAzNS4xMTYzIDI3LjM3MDQgMzUuNTA2MiAyNy4yMzA4IDM1Ljc1NzlaIiBmaWxsPSIjRkRCOTEzIi8+CjxwYXRoIGQ9Ik0zMC4zNDc5IDIzLjUzNDFDMzAuMzQ0NyAyMy43MjAzIDMwLjMwMjEgMjMuOTAzNyAzMC4yMjI4IDI0LjA3MjFMMzAuMDc4OSAyNC40NzA2QzMwLjAxNTggMjQuNzA2MSAyOS44NzI5IDI0LjkxMjUgMjkuNjc0NyAyNS4wNTQ2QzI5LjQ0MzYgMjUuMTUxNyAyOS4xODYxIDI1LjE2NjQgMjguOTQ1NCAyNS4wOTYzQzI0LjM3MzggMjQuMDg3NCAxOS41OTQ4IDI0LjY3MDMgMTUuMzk5NiAyNi43NDg0QzExLjIwNDUgMjguODI2NSA3Ljg0NSAzMi4yNzUxIDUuODc3NCAzNi41MjMxQzUuNzMzNTYgMzYuODM5NiA1LjUwNjI5IDM3LjMwOTkgNC45OTQyMSAzNy4zMDk5QzQuNzg5MTggMzcuMzA5MSA0LjU4NTQ4IDM3LjI3NzEgNC4zOTAwNyAzNy4yMTVMMC44ODE3NTYgMzYuMjIzOUgwLjg3MzEyNUMwLjQ2NzQ4OSAzNi4xMDg5IDAgMzUuOTUyMSAwIDM1LjQwNEMwLjAxNDk5MTIgMzUuMTY2OSAwLjA3OTY4MjkgMzQuOTM1NiAwLjE4OTg3MyAzNC43MjUxQzIuNjgyNTggMjkuMzgyMiA3LjEwNzkgMjUuMTgyNyAxMi41NzQgMjIuOTczMUMxOC4wNDAxIDIwLjc2MzUgMjQuMTQwNiAyMC43MDggMjkuNjQ1OSAyMi44MTc4QzI5LjkxOTIgMjIuOTE4NSAzMC4zNDc5IDIzLjA3OTYgMzAuMzQ3OSAyMy41MzQxWiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyXzI1NzRfODIwOCkiLz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhcl8yNTc0XzgyMDgiIHgxPSIwLjAwMjg3Njg1IiB5MT0iMjkuMjg5MyIgeDI9IjMwLjM0NzkiIHkyPSIyOS4yODkzIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIG9mZnNldD0iMC4zIiBzdG9wLWNvbG9yPSIjRkRCOTEzIi8+CjxzdG9wIG9mZnNldD0iMC43NSIgc3RvcC1jb2xvcj0iI0Y3OTQxRiIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo="
                                    />
                                </div>
                            </a>
                            <ul
                                className="header-menu h-full"
                                data-v-76127e4a=""
                                data-v-13aab30c=""
                            >
                                <li className="relative flex items-center" data-v-13aab30c="">
                                    <div style={{ position: "relative" }} data-v-13aab30c="">
                                        <button
                                            type="button"
                                            className="btn is-md is-raw hover:bg-grays-100 flex items-center px-4 py-1 text-4"
                                            data-v-13aab30c=""
                                        >
                                            <span data-v-13aab30c="">بلیط</span>
                                            <svg
                                                viewBox="0 0 24 24"
                                                width={16}
                                                height={16}
                                                fill="currentColor"
                                                className="md:mr-3"
                                                data-v-13aab30c=""
                                            >
                                                <path d="M21.266 7.302a.75.75 0 0 1 1.037 1.08l-.069.066-9.75 8.25a.75.75 0 0 1-.89.058l-.078-.058-9.75-8.25a.75.75 0 0 1 .893-1.202l.075.056L12 15.142l9.266-7.84Z" />
                                            </svg>
                                        </button>
                                    </div>
                                </li>
                                <li
                                    className="a-divider"
                                    aria-hidden="true"
                                    data-v-13aab30c=""
                                />
                                <li className="relative flex items-center" data-v-13aab30c="">
                                    <div style={{ position: "relative" }} data-v-13aab30c="">
                                        <button
                                            type="button"
                                            className="btn is-md is-raw hover:bg-grays-100 flex items-center px-4 py-1 text-4"
                                            data-v-13aab30c=""
                                        >
                                            <span data-v-13aab30c="">اقامت</span>
                                            <svg
                                                viewBox="0 0 24 24"
                                                width={16}
                                                height={16}
                                                fill="currentColor"
                                                className="md:mr-3"
                                                data-v-13aab30c=""
                                            >
                                                <path d="M21.266 7.302a.75.75 0 0 1 1.037 1.08l-.069.066-9.75 8.25a.75.75 0 0 1-.89.058l-.078-.058-9.75-8.25a.75.75 0 0 1 .893-1.202l.075.056L12 15.142l9.266-7.84Z" />
                                            </svg>
                                        </button>
                                    </div>
                                </li>
                                <li
                                    className="a-divider"
                                    aria-hidden="true"
                                    data-v-13aab30c=""
                                />
                                <li className="relative flex items-center" data-v-13aab30c="">
                                    <a
                                        href="https://www.alibaba.ir/tour"
                                        className="btn is-md is-raw hover:bg-grays-100 flex items-center px-4 py-1 text-4"
                                        data-v-13aab30c=""
                                    >
                                        تور
                                    </a>
                                </li>
                                <li
                                    className="a-divider"
                                    aria-hidden="true"
                                    data-v-13aab30c=""
                                />
                                <li className="relative flex items-center" data-v-13aab30c="">
                                    <a
                                        href="https://www.alibaba.ir/visa"
                                        className="btn is-md is-raw hover:bg-grays-100 flex items-center px-4 py-1 text-4"
                                        data-v-13aab30c=""
                                    >
                                        ویزا
                                    </a>
                                </li>
                                <li
                                    className="a-divider"
                                    aria-hidden="true"
                                    data-v-13aab30c=""
                                />
                                <li className="relative flex items-center" data-v-13aab30c="">
                                    <div style={{ position: "relative" }} data-v-13aab30c="">
                                        <button
                                            type="button"
                                            className="btn is-md is-raw hover:bg-grays-100 flex items-center px-4 py-1 text-4"
                                            data-v-13aab30c=""
                                        >
                                            <span data-v-13aab30c="">بیشتر</span>
                                            <svg
                                                viewBox="0 0 24 24"
                                                width={16}
                                                height={16}
                                                fill="currentColor"
                                                className="md:mr-3"
                                                data-v-13aab30c=""
                                            >
                                                <path d="M21.266 7.302a.75.75 0 0 1 1.037 1.08l-.069.066-9.75 8.25a.75.75 0 0 1-.89.058l-.078-.058-9.75-8.25a.75.75 0 0 1 .893-1.202l.075.056L12 15.142l9.266-7.84Z" />
                                            </svg>
                                        </button>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                        <div
                            className="flex gap-3 h-full mr-auto items-center text-grays-500"
                            data-v-76127e4a=""
                        >
                            <a
                                href="https://www.alibaba.ir/help-center"
                                className="btn is-md is-raw flex items-center gap-1 px-2 hover:bg-grays-100"
                                data-v-76127e4a=""
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    width="1.5em"
                                    fill="currentColor"
                                    data-v-76127e4a=""
                                >
                                    <path
                                        d="M12 1.5C6.2 1.5 1.5 6.2 1.5 12S6.2 22.5 12 22.5 22.5 17.8 22.5 12 17.8 1.5 12 1.5ZM12 3a9 9 0 0 1 9 9 9 9 0 0 1-9 9 9 9 0 0 1-9-9 9 9 0 0 1 9-9Zm.242 12.634a.72.72 0 0 0-.72.72v.36a.72.72 0 0 0 .636.715l.084.005a.72.72 0 0 0 .72-.72v-.36a.72.72 0 0 0-.72-.72Zm-.285-9.068c-.5 0-.943.07-1.33.208a2.664 2.664 0 0 0-.98.592c-.264.258-.467.57-.605.937a3.48 3.48 0 0 0-.206 1.229c0 .354.054.683.164.99.108.308.257.6.441.878.185.279.394.541.629.788.232.247.475.488.724.721.286.266.48.565.578.897.1.334.147.693.147 1.078h1.445a6.226 6.226 0 0 0-.079-.96 2.803 2.803 0 0 0-.226-.726 3.122 3.122 0 0 0-.41-.636 11.256 11.256 0 0 0-.627-.69 56.686 56.686 0 0 0-.511-.519 3.796 3.796 0 0 1-.43-.507 2.073 2.073 0 0 1-.403-1.268c0-.546.144-.973.43-1.283.287-.31.703-.464 1.25-.464.228 0 .448.03.659.09.21.059.396.153.56.28a1.4 1.4 0 0 1 .395.484c.1.195.148.428.148.698h1.444a2.797 2.797 0 0 0-.258-1.186 2.65 2.65 0 0 0-.678-.885 3.035 3.035 0 0 0-1.01-.555 4.033 4.033 0 0 0-1.26-.191Z"
                                        fillRule="evenodd"
                                    />
                                </svg>
                                <span className="text-label" data-v-76127e4a="">
                                    مرکز پشتیبانی آنلاین
                                </span>
                            </a>
                            <a
                                href="https://www.alibaba.ir/profile/orders"
                                className="btn is-md is-raw flex items-center gap-1 px-2 hover:bg-grays-100"
                                data-v-76127e4a=""
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    width="1.5em"
                                    fill="currentColor"
                                    data-v-76127e4a=""
                                >
                                    <path
                                        d="M13.875 1.5a1.5 1.5 0 0 1 1.496 1.388l.004.112v1.5h1.875a2.25 2.25 0 0 1 2.246 2.118l.004.132V18a2.25 2.25 0 0 1-2.118 2.246l-.132.004h-.375V21a.75.75 0 0 1-1.495.087L15.375 21v-.75h-4.97a3.001 3.001 0 0 1-2.755 2.246l-.15.004a3 3 0 0 1-2.25-4.984V6.75a2.25 2.25 0 0 1 2.118-2.246L7.5 4.5h1.875V3a1.5 1.5 0 0 1 1.388-1.496l.112-.004h3ZM7.5 18a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm9.75-12H7.5a.75.75 0 0 0-.745.663l-.005.087v9.845a3.004 3.004 0 0 1 3.655 2.155h6.845a.75.75 0 0 0 .745-.663L18 18V6.75a.75.75 0 0 0-.663-.745L17.25 6Zm-3 2.25a.75.75 0 0 1 .745.663L15 9v6.75a.75.75 0 0 1-1.495.088l-.005-.088V9a.75.75 0 0 1 .75-.75Zm-3.75 0a.75.75 0 0 1 .745.663L11.25 9v6.75a.75.75 0 0 1-1.495.088l-.005-.088V9a.75.75 0 0 1 .75-.75ZM13.875 3h-3v1.5h3V3Z"
                                        fillRule="evenodd"
                                    />
                                </svg>
                                <span className="text-label" data-v-76127e4a="">
                                    سفرهای من
                                </span>
                            </a>
                            <div
                                className="relative"
                                data-v-76127e4a=""
                                style={{ position: "relative" }}
                            >
                                <button
                                    type="button"
                                    className="btn is-md is-raw py-2 px-3 text-4 relative hover:bg-grays-100"
                                    aria-label="ناحیه کاربری سید حسام بهبودی نژاد"
                                    data-v-76127e4a=""
                                >
                                    <svg
                                        viewBox="0 0 24 24"
                                        width={24}
                                        height={24}
                                        fill="currentColor"
                                        className="ml-1 text-grays-500"
                                        data-v-76127e4a=""
                                    >
                                        <path
                                            d="M17.25 12.75A3.75 3.75 0 0 1 21 16.5v3.75a.75.75 0 0 1-.75.75H3.75a.75.75 0 0 1-.75-.75V16.5a3.75 3.75 0 0 1 3.75-3.75h10.5Zm0 1.5H6.75A2.25 2.25 0 0 0 4.5 16.5v3h15v-3a2.25 2.25 0 0 0-2.118-2.246l-.132-.004ZM12 3a4.5 4.5 0 1 1 0 9 4.5 4.5 0 1 1 0-9Zm0 1.5a3 3 0 1 0-.001 5.999A3 3 0 0 0 12 4.5Z"
                                            fillRule="evenodd"
                                        />
                                    </svg>
                                    <svg
                                        viewBox="0 0 24 24"
                                        width={24}
                                        height={24}
                                        fill="currentColor"
                                        className="absolute top-2 right-1 w-3 h-3 text-success-400"
                                        data-v-76127e4a=""
                                    >
                                        <path d="m17.726 9.74-6.805 6.805a1.122 1.122 0 0 1-1.591 0l-3.75-3.75a1.124 1.124 0 1 1 1.59-1.59l2.955 2.954 6.01-6.01a1.124 1.124 0 1 1 1.591 1.59ZM12 1.5C6.21 1.5 1.5 6.21 1.5 12S6.21 22.5 12 22.5 22.5 17.79 22.5 12 17.79 1.5 12 1.5Z" />
                                    </svg>
                                    <span
                                        className="text-grays-500 header__username"
                                        dir="rtl"
                                        data-v-76127e4a=""
                                    >
                                        سید حسام بهبودی نژاد
                                    </span>
                                    <svg
                                        viewBox="0 0 24 24"
                                        width={16}
                                        height={16}
                                        fill="currentColor"
                                        className="text-grays-500"
                                        data-v-76127e4a=""
                                    >
                                        <path d="M21.266 7.302a.75.75 0 0 1 1.037 1.08l-.069.066-9.75 8.25a.75.75 0 0 1-.89.058l-.078-.058-9.75-8.25a.75.75 0 0 1 .893-1.202l.075.056L12 15.142l9.266-7.84Z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="headerPortal" data-v-76127e4a="" />
            </header>
        </>
    )
}
