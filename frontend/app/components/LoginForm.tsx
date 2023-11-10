import { useRouter } from "next/navigation"
import { useState } from "react"


type LoginFormState = {
    email: string;
    password: string;
};

export default function LoginForm() {
    const router = useRouter();

    const [state, setState] = useState<LoginFormState>({
        email: "",
        password: ""
    });

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const copy: LoginFormState = { ...state };
        copy[e.target.name as keyof LoginFormState] = e.target.value;
        setState(copy);
    }

    async function handleSubmit() {
        const res = await fetch(`${process.env.BACKEND_ROUTE}/users/signin`, {
            method: "POST",
            body: JSON.stringify(state),
            headers: {
                "Content-Type": "application/json"
            }
        })
        if (res.ok) {
            alert("user login success")
            router.push("/")
        }
    }

    return (
        <div className="flex flex-col items-center justify-between">
            <div className="pb-12">
                <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left justify-between">
                    <p className="mb-3 text-2xl">Email:</p>
                    <input type="text" name="email" value={state.email} onChange={handleChange} className="mb-3 text-2xl rounded-lg text-slate-700"/>
                </div>
                <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left">
                    <p className="mb-3 text-2xl">Password:</p>
                    <input type="password" name="password" value={state.password} onChange={handleChange} className="mb-3 text-2xl rounded-lg text-slate-700"/>
                </div>
            </div>
            <button onClick={handleSubmit} className="mb-3 text-2xl font-semibold group rounded-lg border border-transparent px-10 py-3 transition-colors hover:border-yellow-300 bg-yellow-100 dark:border-orange-700 dark:bg-orange-800/30">Submit</button>
        </div>

    )
}
