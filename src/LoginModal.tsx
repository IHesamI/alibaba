import { useRef, useState } from 'react'
import Styles from './styles';
import { signupAPI } from './API';

export default function LoginModal() {

    const [isSignup, setIsSignup] = useState(false);

    const signUpRef = useRef<{
        username: string
        email: string
        phone_number: string
        password1: string
        password2: string
    }>({
        email: '123xdsq@gmail.com',
        password1: '123',
        password2: '123',
        phone_number: '09370',
        username: 'ihesqwe'
    });

    const loginRef = useRef<{
        username: string;
        password: string;
    }>({
        username: '',
        password: '',
    });

    const handleSignUp = async (e) => {
        e.preventDefault();
        const signUpData = new FormData();
        signUpData.append('email', signUpRef.current.email);
        signUpData.append('password1', signUpRef.current.password1);
        signUpData.append('password2', signUpRef.current.password2);
        signUpData.append('phone_number', signUpRef.current.phone_number);
        signUpData.append('username', signUpRef.current.username);
        signupAPI(signUpData)
    }

    return (
        <>
            <Styles />
            {
                isSignup ?
                    <div id="modal_container" className="a-modal-container">
                        <span className="a-modal-backdrop" data-test="modal-backdrop" />
                        <div
                            className="a-card a-modal is-full auth-modal"
                            id="auth"
                            data-v-7480b0b0=""
                            style={{ width: 600 }}
                        >
                            <div className="a-card__body">
                                <div
                                    className="a-toast-container is-empty is-modal-toast"
                                    data-v-7480b0b0=""
                                />
                                <button
                                    type="button"
                                    className="btn is-md is-raw auth-modal-close p-3 m-3"
                                    data-v-7480b0b0=""
                                >
                                    <svg
                                        viewBox="0 0 24 24"
                                        width="24px"
                                        height="24px"
                                        fill="currentColor"
                                        data-v-7480b0b0=""
                                    >
                                        <path d="m5.335 4.282.07.063L12 10.939l6.595-6.594a.75.75 0 0 1 1.123.99l-.063.07L13.061 12l6.594 6.595a.75.75 0 0 1-.99 1.123l-.07-.063L12 13.061l-6.595 6.594a.75.75 0 0 1-1.123-.99l.063-.07L10.939 12 4.345 5.405a.75.75 0 0 1 .99-1.123Z" />
                                    </svg>
                                </button>
                                <form
                                    onSubmit={handleSignUp}
                                    action="#"
                                    show-modal="true"
                                    className="auth-form"
                                    data-scrollable=""
                                    content="[object Object]"
                                    data-v-3dfc8a0a=""
                                    data-v-7480b0b0=""
                                >
                                    <h3 data-v-3dfc8a0a="">
                                        <span data-v-3dfc8a0a="">لطفااطلاعات حساب کاربری را وارد کنید</span>
                                    </h3>
                                    <h4 data-v-3dfc8a0a="">
                                        <span data-v-3dfc8a0a="">
                                            تا تجربه اختصاصی‌تری در جستجو و خرید داشته باشید.
                                        </span>
                                    </h4>
                                    <div className="a-input mb-5 is-lg" data-v-3dfc8a0a="">
                                        <div className="a-input__input">
                                            <input onChange={(e) => {
                                                signUpRef.current['username'] = e.target.value;
                                            }} id="al188996" dir="ltr" inputMode="text" defaultValue="" />
                                        </div>
                                        <fieldset>
                                            <legend style={{ width: 0 }} />
                                        </fieldset>
                                        <label
                                            htmlFor="al188996"
                                            className="a-input__label"
                                            disable-dropdown-close="false"
                                        >
                                            نام کاربری
                                        </label>
                                    </div>
                                    <div className="a-input mb-5 is-lg" data-v-3dfc8a0a="">
                                        <div className="a-input__input">
                                            <input
                                                onChange={(e) => {
                                                    signUpRef.current['email'] = e.target.value;
                                                }}
                                                id="al188996"
                                                dir="ltr"
                                                inputMode="text"
                                                defaultValue="" />
                                        </div>
                                        <fieldset>
                                            <legend style={{ width: 0 }} />
                                        </fieldset>
                                        <label
                                            htmlFor="al188996"
                                            className="a-input__label"
                                            disable-dropdown-close="false"
                                        >
                                            ایمیل
                                        </label>
                                    </div>
                                    <div className="a-input mb-5 is-lg" data-v-3dfc8a0a="">
                                        <div className="a-input__input">
                                            <input
                                                onChange={(e) => {
                                                    signUpRef.current['phone_number'] = e.target.value;
                                                }}
                                                id="al188996"
                                                dir="ltr"
                                                inputMode="text"
                                                defaultValue="" />
                                        </div>
                                        <fieldset>
                                            <legend style={{ width: 0 }} />
                                        </fieldset>
                                        <label
                                            htmlFor="al188996"
                                            className="a-input__label"
                                            disable-dropdown-close="false"
                                        >
                                            شماره تلفن
                                        </label>
                                    </div>
                                    <div className="a-input mb-5 is-lg" data-v-3dfc8a0a="">
                                        <div className="a-input__input">
                                            <input
                                                onChange={(e) => {
                                                    signUpRef.current['password1'] = e.target.value;
                                                }}
                                                id="al188996"
                                                dir="ltr"
                                                inputMode="text" 
                                                defaultValue="" />
                                        </div>
                                        <fieldset>
                                            <legend style={{ width: 0 }} />
                                        </fieldset>
                                        <label
                                            htmlFor="al188996"
                                            className="a-input__label"
                                            disable-dropdown-close="false"
                                        >
                                            رمز عبور
                                        </label>
                                    </div>
                                    <div className="a-input mb-5 is-lg" data-v-3dfc8a0a="">
                                        <div className="a-input__input">
                                            <input
                                                onChange={(e) => {
                                                    signUpRef.current['password2'] = e.target.value;
                                                }}
                                                id="al188996"
                                                dir="ltr"
                                                inputMode="text"
                                                defaultValue="" />
                                        </div>
                                        <fieldset>
                                            <legend style={{ width: 0 }} />
                                        </fieldset>
                                        <label
                                            htmlFor="al188996"
                                            className="a-input__label"
                                            disable-dropdown-close="false"
                                        >
                                            رمز عبور تاییدیه
                                        </label>
                                    </div>
                                    <div className="auth-actions" data-v-3dfc8a0a="">
                                        <button
                                            type="submit"
                                            className="btn is-md is-solid-secondary py-3 mb-4"
                                            data-v-3dfc8a0a=""
                                            
                                        >
                                            ثبت نام در علی بابا
                                        </button>
                                        <div className="flex w-full justify-between" data-v-3dfc8a0a="">
                                            <button
                                                type="button"
                                                className="btn is-md is-link"
                                                data-v-3dfc8a0a=""
                                                onClick={() => setIsSignup(false)}
                                            >
                                                از قبل حساب دارد؟{" "}
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    : <div id="modal_container" className="a-modal-container">
                        <span className="a-modal-backdrop" data-test="modal-backdrop" />
                        <div
                            className="a-card a-modal is-full auth-modal"
                            id="auth"
                            data-v-7480b0b0=""
                            style={{ width: 600 }}
                        >
                            <div className="a-card__body">
                                <div
                                    className="a-toast-container is-empty is-modal-toast"
                                    data-v-7480b0b0=""
                                />
                                <button
                                    type="button"
                                    className="btn is-md is-raw auth-modal-close p-3 m-3"
                                    data-v-7480b0b0=""
                                >
                                    <svg
                                        viewBox="0 0 24 24"
                                        width="24px"
                                        height="24px"
                                        fill="currentColor"
                                        data-v-7480b0b0=""
                                    >
                                        <path d="m5.335 4.282.07.063L12 10.939l6.595-6.594a.75.75 0 0 1 1.123.99l-.063.07L13.061 12l6.594 6.595a.75.75 0 0 1-.99 1.123l-.07-.063L12 13.061l-6.595 6.594a.75.75 0 0 1-1.123-.99l.063-.07L10.939 12 4.345 5.405a.75.75 0 0 1 .99-1.123Z" />
                                    </svg>
                                </button>
                                <form
                                    action="#"
                                    show-modal="true"
                                    className="auth-form"
                                    data-scrollable=""
                                    content="[object Object]"
                                    data-v-3dfc8a0a=""
                                    data-v-7480b0b0=""
                                >
                                    <h3 data-v-3dfc8a0a="">
                                        <span data-v-3dfc8a0a="">لطفا وارد حساب کاربری شوید</span>
                                    </h3>
                                    <h4 data-v-3dfc8a0a="">
                                        <span data-v-3dfc8a0a="">
                                            تا تجربه اختصاصی‌تری در جستجو و خرید داشته باشید.
                                        </span>
                                    </h4>
                                    <div className="a-input mb-5 is-lg" data-v-3dfc8a0a="">
                                        <div className="a-input__input">
                                            <input id="al188996" dir="ltr" inputMode="text" defaultValue="" />
                                        </div>
                                        <fieldset>
                                            <legend style={{ width: 0 }} />
                                        </fieldset>
                                        <label
                                            htmlFor="al188996"
                                            className="a-input__label"
                                            disable-dropdown-close="false"
                                        >
                                            نام کاربری
                                        </label>
                                    </div>
                                    <div
                                        className="a-input password-input mb-6 has-prepend is-lg"
                                        data-v-3dfc8a0a=""
                                    >
                                        <div className="a-input__input">
                                            <button type="button" className="btn is-md is-raw" tabIndex={-1}>
                                                <svg viewBox="0 0 24 24" width="1.5em" fill="currentColor">
                                                    <path
                                                        d="M19.716 3.22a.756.756 0 0 1 1.065 0 .756.756 0 0 1 0 1.064l-2.632 2.633-1.103 1.095-1.92 1.927-1.101 1.095-2.992 2.993-1.095 1.102-1.515 1.508-1.155 1.155-2.984 2.992a.768.768 0 0 1-.533.218.768.768 0 0 1-.532-.218.756.756 0 0 1 0-1.065l2.632-2.632a11.41 11.41 0 0 1-4.02-3.915 2.229 2.229 0 0 1 0-2.34C3.925 7.39 7.817 5.252 12 5.252c1.657 0 3.262.337 4.732.96l2.984-2.993Zm-.232 4.604a11.17 11.17 0 0 1 2.684 3.008c.443.72.443 1.62 0 2.34-2.092 3.442-5.983 5.58-10.168 5.58a12.16 12.16 0 0 1-3.052-.39l1.268-1.26c.585.097 1.177.15 1.784.15 3.659 0 7.063-1.86 8.885-4.86.15-.24.15-.54 0-.78a9.783 9.783 0 0 0-2.467-2.715l1.066-1.073ZM12 6.752c-3.66 0-7.064 1.86-8.886 4.86-.15.24-.15.54 0 .78.922 1.53 2.265 2.76 3.84 3.6l1.919-1.928a3.734 3.734 0 0 1-.622-2.062c0-2.07 1.68-3.75 3.749-3.75.765 0 1.47.232 2.062.622l1.515-1.507A10.797 10.797 0 0 0 12 6.752Zm3.712 4.853c.015.134.037.262.037.397a3.75 3.75 0 0 1-3.75 3.75c-.134 0-.262-.022-.397-.038l4.11-4.11ZM12 9.752a2.257 2.257 0 0 0-2.25 2.25c0 .345.083.668.225.967l2.992-2.992A2.235 2.235 0 0 0 12 9.752Z"
                                                        fillRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                            <input id="al193974" type="password" dir="ltr" inputMode="text" />
                                        </div>
                                        <fieldset>
                                            <legend style={{ width: 0 }} />
                                        </fieldset>
                                        <label
                                            htmlFor="al193974"
                                            className="a-input__label"
                                            disable-dropdown-close="false"
                                        >
                                            کلمه عبور
                                        </label>
                                    </div>
                                    <div className="auth-actions" data-v-3dfc8a0a="">
                                        <button
                                            type="submit"
                                            className="btn is-md is-solid-secondary py-3 mb-4"
                                            data-v-3dfc8a0a=""
                                            disabled=""
                                        >
                                            {" "}
                                            ورود به علی‌بابا{" "}
                                        </button>
                                        <div className="flex w-full justify-between" data-v-3dfc8a0a="">

                                            <button
                                                type="button"
                                                className="btn is-md is-link"
                                                data-v-3dfc8a0a=""
                                                onClick={() => setIsSignup(true)}
                                            >
                                                {" "}
                                                ساخت اکانت جدید؟
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
            }
        </>
    );
}
