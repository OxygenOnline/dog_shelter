import { useRouter } from "next/navigation"
import { useState } from "react"


type RegisterFormState = {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
};

export default function RegisterForm() {
    const router = useRouter();

    const [state, setState] = useState<RegisterFormState>({
        email: "",
        firstName: "",
        lastName: "",
        password: ""
    });

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const copy: RegisterFormState = { ...state };
        copy[e.target.name as keyof RegisterFormState] = e.target.value;
        setState(copy);
    }

    async function handleSubmit() {
        const res = await fetch(`${process.env.BACKEND_ROUTE}/users/signup`, {
            method: "POST",
            body: JSON.stringify(state),
            headers: {
                "Content-Type": "application/json"
            }
        })
        if (res.ok) {
            alert("user registered success")
            router.push("/login")
        }
    }

    return (
        <div className="flex flex-col items-center justify-between">
            <div className="pb-12">
                <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left justify-between">
                    <p className="mb-3 text-2xl">Email:</p>
                    <input type="text" name="email" value={state.email} onChange={handleChange}  className="mb-3 text-2xl rounded-lg text-slate-700"/>
                </div>
                <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left justify-between">
                    <p className="mb-3 text-2xl">First Name:</p>
                    <input type="text" name="firstName" value={state.firstName} onChange={handleChange} autoComplete="off"  className="mb-3 text-2xl rounded-lg text-slate-700"/>
                </div>
                <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left justify-between">
                    <p className="mb-3 text-2xl">Last Name:</p>
                    <input type="text" name="lastName" value={state.lastName} onChange={handleChange} autoComplete="off"  className="mb-3 text-2xl rounded-lg text-slate-700"/>
                </div>
                <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left justify-between">
                    <p className="mb-3 text-2xl">Password:</p>
                    <input type="password" name="password" value={state.password} onChange={handleChange}  className="mb-3 text-2xl rounded-lg text-slate-700"/>
                </div>
            </div>
            <button onClick={handleSubmit}  className="mb-3 text-2xl font-semibold group rounded-lg border border-transparent px-10 py-3 transition-colors hover:border-yellow-300 bg-yellow-100 dark:border-orange-700 dark:bg-orange-800/30">Submit</button>
        </div>
    )
}
