import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../firebase/firebase.init"

initializeAuthentication();

const useFirebase = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();

    const auth = getAuth();

    // getting user name
    const handleName = event => {
        setName(event.target.value);
    }

    // getting user email
    const handleEmail = event => {
        setEmail(event.target.value);
    }

    // getting user password
    const handlePassword = event => {
        setPassword(event.target.value);
    }

    // create new user
    const createUser = (event) => {
        setIsLoading(true)
        event.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user)
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false))
    }

    // login user using password
    const loginUser = (event) => {
        setIsLoading(true)
        event.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user)
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false))
    }

    // handle google sign in
    const signInUsingGoogle = () => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false))
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false)
        })
        return () => unsubscribed;
    }, [])

    // sign out
    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false))
    }
    return {
        name,
        isLoading,
        user,
        error,
        createUser,
        loginUser,
        handleName,
        handleEmail,
        handlePassword,
        signInUsingGoogle,
        logOut
    }
}

export default useFirebase;