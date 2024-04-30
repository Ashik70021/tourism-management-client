import { GoogleAuthProvider, GithubAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";


export const AuthContext = createContext(null);
const GoogleProvider = new GoogleAuthProvider();
const GithubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(null);

        // Create User
        const registerUser = (email, password) => {
            setLoading(true)
            return createUserWithEmailAndPassword(auth, email, password)
        }
    
        // Update User Profile
        const updateUserProfile = (name, image) => {
            setLoading(true)
            return updateProfile(auth.currentUser, {
                displayName: name,
                photoURL: image,
            })
        }
    
        // Login user
        const loginUser = (email, password) => {
            setLoading(true)
            return signInWithEmailAndPassword(auth, email, password);
        }
    
        // Google login
        const googleUser = () => {
            setLoading(true)
            return signInWithPopup(auth, GoogleProvider);
        }
    
        // Github User
        const githubUser = () => {
            setLoading(true)
            return signInWithPopup(auth, GithubProvider);
        }
    
        // Logout user
        const logout = () => {
            setUser(null)
            signOut(auth);
        }
        // Observer
        useEffect(() => {
            const unsubscribe = onAuthStateChanged(auth, (user) => {
                if (user) {
                    setUser(user);
                    setLoading(false);
                }
                else {
                    setUser(null);
                }
            });
            return () => {
                unsubscribe()
            }
        }, [])
    

    const authInfo = {
        user,
        registerUser,
        updateUserProfile,
        loginUser,
        googleUser,
        githubUser,
        logout,
        loading,
    }
    return (
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>  
    );
};

export default AuthProvider;