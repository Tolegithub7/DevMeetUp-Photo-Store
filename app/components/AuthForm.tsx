"use client";
import { useState } from "react";
import { supabase } from "../utils/supabaseClient";

export default function AuthForm(){
    const [isNewUser, setIsNewUser] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSigningIn, setIsSigningIn] = useState(false);
    const [isSigningUp, setIsSigningUp] = useState(false);

    async function handleSignUp(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        const {data, error} = await supabase.auth.signUp({
            email,
            password
        })
        if(!error) {
            setIsSigningUp(true);
        }
        console.log({data, error});
    }

    async function handleLogIn(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        console.log("Log in with email:", email);
    }

    let signInMessage = 'Sign In';
    if(isSigningIn){
        signInMessage = 'Signing In';
    } else if (isNewUser){
        signInMessage = 'Sign Up';
    }

    const signUpMessage = <p className="text-center text-green-600 font-medium">Email sent! Check your email to confirm sign up.</p>

    return (
        <form onSubmit={isNewUser ? handleSignUp : handleLogIn } className="space-y-8 mt-12 border border-gray-300 p-8 rounded-lg shadow-lg max-w-lg mx-auto hover:border-green-400 flex justify-center flex-col items-center">
            <input 
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:text-white text-black"            />
            <input 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={isNewUser? "Create a password" : "Enter your password"}
                className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:text-white text-black"            />
            <button 
                type="submit"
                className="group relative w-1/4 flex items-center justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                {signInMessage}
            </button>
            <p className="text-center text-white">
                {
                    isNewUser ? (
                        <>
                            Already have an account? {' '}
                            <button 
                                type="button"
                                onClick={() => setIsNewUser(false)}
                                className="text-indigo-400 hover:text-indigo-600"
                            >
                                Sign In
                            </button>
                        </>
                    ):(
                        <>
                            Don't have an account? {' '}
                            <button
                                type="button"
                                onClick={() => setIsNewUser(true)}
                                className="text-indigo-400 hover:text-indigo-600"
                            >
                                Sign Up
                            </button>
                        </>
                    )
                }
            </p>
            {
                isSigningUp && signUpMessage
            }
        </form>
    )
}