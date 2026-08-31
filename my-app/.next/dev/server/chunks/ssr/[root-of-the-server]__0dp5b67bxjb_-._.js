module.exports = [
(()=>{"use strict";return[
"[project]/app/client-providers.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ClientProviders
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$locale$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/context/locale-context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$auth$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/context/auth-context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$notification$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/context/notification-context.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function ClientProviders({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$context$2f$locale$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LocaleProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$context$2f$auth$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthProvider"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$context$2f$notification$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NotificationProvider"], {
                children: children
            }, void 0, false, {
                fileName: "[project]/app/client-providers.tsx",
                lineNumber: 12,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/client-providers.tsx",
            lineNumber: 11,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/client-providers.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
}),
"[project]/context/auth-context.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthProvider",
    ()=>AuthProvider,
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
const SESSION_TIMEOUT = 45 * 60 * 1000 // 45 minutes
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
// Simulated user store (in real app, this would be API calls)
const MOCK_USERS = [
    {
        id: '1',
        name: 'Admin User',
        email: 'admin@dreammore.com',
        phone: '+251911111111',
        role: 'admin',
        isVerified: true,
        createdAt: '2026-01-01',
        password: 'Admin123!'
    },
    {
        id: '2',
        name: 'Abebe Kebede',
        email: 'abebe@example.com',
        phone: '+251922222222',
        role: 'seller',
        isVerified: true,
        createdAt: '2026-02-15',
        password: 'Seller123!'
    },
    {
        id: '3',
        name: 'Hanna Tesfaye',
        email: 'hanna@example.com',
        phone: '+251933333333',
        role: 'buyer',
        isVerified: false,
        createdAt: '2026-03-10',
        password: 'Buyer123!'
    }
];
function AuthProvider({ children }) {
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) return null;
        //TURBOPACK unreachable
        ;
        const saved = undefined;
    });
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const lastActivityRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(Date.now());
    // Session timeout check
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const checkSession = ()=>{
            if (user && Date.now() - lastActivityRef.current > SESSION_TIMEOUT) {
                setUser(null);
                localStorage.removeItem('dreammore-session');
            }
        };
        const interval = setInterval(checkSession, 60000);
        return ()=>clearInterval(interval);
    }, [
        user
    ]);
    // Track user activity
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleActivity = ()=>{
            lastActivityRef.current = Date.now();
        };
        window.addEventListener('mousemove', handleActivity);
        window.addEventListener('keydown', handleActivity);
        window.addEventListener('click', handleActivity);
        return ()=>{
            window.removeEventListener('mousemove', handleActivity);
            window.removeEventListener('keydown', handleActivity);
            window.removeEventListener('click', handleActivity);
        };
    }, []);
    const login = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (email, password)=>{
        setIsLoading(true);
        // Simulate API delay
        await new Promise((r)=>setTimeout(r, 800));
        const found = MOCK_USERS.find((u)=>u.email === email && u.password === password);
        if (!found) {
            setIsLoading(false);
            return {
                success: false,
                error: 'Invalid email or password'
            };
        }
        const { password: _pw, ...userData } = found;
        setUser(userData);
        localStorage.setItem('dreammore-session', JSON.stringify({
            user: userData
        }));
        setIsLoading(false);
        return {
            success: true
        };
    }, []);
    const loginWithOTP = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (phone)=>{
        setIsLoading(true);
        await new Promise((r)=>setTimeout(r, 800));
        const found = MOCK_USERS.find((u)=>u.phone === phone);
        if (!found) {
            setIsLoading(false);
            return {
                success: false,
                error: 'Phone number not registered'
            };
        }
        // In real app, this would send an SMS with OTP
        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        sessionStorage.setItem(`otp-${phone}`, otp);
        sessionStorage.setItem(`otp-${phone}-expiry`, (Date.now() + 5 * 60 * 1000).toString());
        console.log(`OTP for ${phone}: ${otp}`);
        setIsLoading(false);
        return {
            success: true
        };
    }, []);
    const verifyOTP = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (phone, otp)=>{
        setIsLoading(true);
        await new Promise((r)=>setTimeout(r, 500));
        const storedOTP = sessionStorage.getItem(`otp-${phone}`);
        const expiry = sessionStorage.getItem(`otp-${phone}-expiry`);
        if (!storedOTP || !expiry) {
            setIsLoading(false);
            return {
                success: false,
                error: 'OTP expired or not found'
            };
        }
        if (Date.now() > parseInt(expiry)) {
            sessionStorage.removeItem(`otp-${phone}`);
            sessionStorage.removeItem(`otp-${phone}-expiry`);
            setIsLoading(false);
            return {
                success: false,
                error: 'OTP has expired'
            };
        }
        if (otp !== storedOTP) {
            setIsLoading(false);
            return {
                success: false,
                error: 'Invalid OTP'
            };
        }
        const found = MOCK_USERS.find((u)=>u.phone === phone);
        if (!found) {
            setIsLoading(false);
            return {
                success: false,
                error: 'User not found'
            };
        }
        const { password: _pw2, ...userData } = found;
        setUser(userData);
        localStorage.setItem('dreammore-session', JSON.stringify({
            user: userData
        }));
        sessionStorage.removeItem(`otp-${phone}`);
        sessionStorage.removeItem(`otp-${phone}-expiry`);
        setIsLoading(false);
        return {
            success: true
        };
    }, []);
    const register = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (data)=>{
        setIsLoading(true);
        await new Promise((r)=>setTimeout(r, 1000));
        if (!data.agreeToTerms) {
            setIsLoading(false);
            return {
                success: false,
                error: 'You must agree to the Terms of Service'
            };
        }
        if (MOCK_USERS.some((u)=>u.email === data.email)) {
            setIsLoading(false);
            return {
                success: false,
                error: 'Email already registered'
            };
        }
        if (MOCK_USERS.some((u)=>u.phone === data.phone)) {
            setIsLoading(false);
            return {
                success: false,
                error: 'Phone number already registered'
            };
        }
        const newUser = {
            id: String(MOCK_USERS.length + 1),
            name: data.name,
            email: data.email,
            phone: data.phone,
            role: data.role,
            isVerified: false,
            createdAt: new Date().toISOString(),
            password: data.password
        };
        MOCK_USERS.push(newUser);
        const { password: _pw3, ...userData } = newUser;
        setUser(userData);
        localStorage.setItem('dreammore-session', JSON.stringify({
            user: userData
        }));
        setIsLoading(false);
        return {
            success: true
        };
    }, []);
    const logout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setUser(null);
        localStorage.removeItem('dreammore-session');
    }, []);
    const updateProfile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((data)=>{
        if (user) {
            const updated = {
                ...user,
                ...data
            };
            setUser(updated);
            localStorage.setItem('dreammore-session', JSON.stringify({
                user: updated
            }));
        }
    }, [
        user
    ]);
    const requestPasswordReset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (email)=>{
        await new Promise((r)=>setTimeout(r, 800));
        const found = MOCK_USERS.find((u)=>u.email === email);
        if (!found) {
            return {
                success: false,
                error: 'Email not found'
            };
        }
        // In real app, send reset email
        return {
            success: true
        };
    }, []);
    const resetPassword = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (token, newPassword)=>{
        await new Promise((r)=>setTimeout(r, 800));
        // In real app, validate token and update password
        console.log('Password reset with token:', token, 'new password length:', newPassword.length);
        return {
            success: true
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: {
            user,
            isLoading,
            isAuthenticated: !!user,
            login,
            loginWithOTP,
            verifyOTP,
            register,
            logout,
            updateProfile,
            requestPasswordReset,
            resetPassword
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/context/auth-context.tsx",
        lineNumber: 270,
        columnNumber: 5
    }, this);
}
function useAuth() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (!context) throw new Error('useAuth must be used within AuthProvider');
    return context;
}
}),
"[project]/context/locale-context.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LocaleProvider",
    ()=>LocaleProvider,
    "useLocale",
    ()=>useLocale
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/i18n.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
const LocaleContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function getInitialLocale() {
    if ("TURBOPACK compile-time truthy", 1) return 'en';
    //TURBOPACK unreachable
    ;
    const saved = undefined;
}
function LocaleProvider({ children }) {
    const [locale, setLocaleState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(getInitialLocale);
    const setLocale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((l)=>{
        setLocaleState(l);
        localStorage.setItem('dreammore-locale', l);
        document.documentElement.lang = l;
    }, []);
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((key)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(key, locale), [
        locale
    ]);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            locale,
            setLocale,
            t
        }), [
        locale,
        setLocale,
        t
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LocaleContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/context/locale-context.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
function useLocale() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(LocaleContext);
    if (!context) throw new Error('useLocale must be used within LocaleProvider');
    return context;
}
}),
"[project]/context/notification-context.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NotificationProvider",
    ()=>NotificationProvider,
    "useNotifications",
    ()=>useNotifications
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
const NotificationContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function getInitialNotifications() {
    return [
        {
            id: '1',
            type: 'listing',
            title: 'Listing Approved',
            body: 'Your Toyota Camry 2021 listing has been approved and is now live.',
            isRead: false,
            createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
            link: '/seller/listings'
        },
        {
            id: '2',
            type: 'message',
            title: 'New Message',
            body: 'Abebe sent you a message about your Toyota Camry listing.',
            isRead: false,
            createdAt: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
            link: '/inbox'
        },
        {
            id: '3',
            type: 'verification',
            title: 'Verification Approved',
            body: 'Your seller verification has been approved. You now have a verified badge.',
            isRead: true,
            createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString()
        }
    ];
}
function NotificationProvider({ children }) {
    const [notifications, setNotifications] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(getInitialNotifications);
    const unreadCount = notifications.filter((n)=>!n.isRead).length;
    const addNotification = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((n)=>{
        const newNotification = {
            ...n,
            id: Math.random().toString(36).substring(2, 9),
            isRead: false,
            createdAt: new Date().toISOString()
        };
        setNotifications((prev)=>[
                newNotification,
                ...prev
            ]);
    }, []);
    const markAsRead = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((id)=>{
        setNotifications((prev)=>prev.map((n)=>n.id === id ? {
                    ...n,
                    isRead: true
                } : n));
    }, []);
    const markAllAsRead = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setNotifications((prev)=>prev.map((n)=>({
                    ...n,
                    isRead: true
                })));
    }, []);
    const clearAll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setNotifications([]);
    }, []);
    const removeNotification = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((id)=>{
        setNotifications((prev)=>prev.filter((n)=>n.id !== id));
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NotificationContext.Provider, {
        value: {
            notifications,
            unreadCount,
            addNotification,
            markAsRead,
            markAllAsRead,
            clearAll,
            removeNotification
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/context/notification-context.tsx",
        lineNumber: 92,
        columnNumber: 5
    }, this);
}
function useNotifications() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(NotificationContext);
    if (!context) throw new Error('useNotifications must be used within NotificationProvider');
    return context;
}
}),
"[project]/lib/i18n.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "t",
    ()=>t,
    "translations",
    ()=>translations
]);
const en = {
    // Navigation
    nav_home: 'Home',
    nav_search: 'Search',
    nav_favorites: 'Favorites',
    nav_messages: 'Messages',
    nav_my_listings: 'My Listings',
    nav_create_listing: 'Create Listing',
    nav_profile: 'Profile',
    nav_login: 'Login',
    nav_register: 'Register',
    nav_logout: 'Logout',
    nav_admin: 'Admin Panel',
    nav_inbox: 'Inbox',
    nav_notifications: 'Notifications',
    // Common
    common_save: 'Save',
    common_cancel: 'Cancel',
    common_delete: 'Delete',
    common_edit: 'Edit',
    common_submit: 'Submit',
    common_loading: 'Loading...',
    common_search: 'Search',
    common_filter: 'Filter',
    common_sort: 'Sort',
    common_price: 'Price',
    common_location: 'Location',
    common_description: 'Description',
    common_images: 'Images',
    common_status: 'Status',
    common_date: 'Date',
    common_actions: 'Actions',
    common_back: 'Back',
    common_next: 'Next',
    common_previous: 'Previous',
    common_confirm: 'Confirm',
    common_close: 'Close',
    common_yes: 'Yes',
    common_no: 'No',
    common_view_all: 'View All',
    common_no_results: 'No results found',
    common_results: 'Results',
    common_showing: 'Showing',
    common_of: 'of',
    common_page: 'Page',
    common_per_page: 'per page',
    // Auth
    auth_login: 'Login',
    auth_register: 'Register',
    auth_email: 'Email Address',
    auth_password: 'Password',
    auth_confirm_password: 'Confirm Password',
    auth_phone: 'Phone Number',
    auth_forgot_password: 'Forgot Password?',
    auth_reset_password: 'Reset Password',
    auth_remember_me: 'Remember Me',
    auth_login_with_email: 'Login with Email',
    auth_login_with_phone: 'Login with Phone',
    auth_otp_sent: 'OTP has been sent to your phone',
    auth_enter_otp: 'Enter verification code',
    auth_verify: 'Verify',
    auth_resend_otp: 'Resend OTP',
    auth_terms_agree: 'I agree to the Terms of Service and Privacy Policy',
    auth_create_account: 'Create Account',
    auth_already_have_account: 'Already have an account?',
    auth_dont_have_account: "Don't have an account?",
    auth_select_role: 'Select your role',
    auth_role_buyer: 'Buyer',
    auth_role_seller: 'Seller',
    auth_two_factor: 'Two-Factor Authentication',
    // Listings
    listing_create: 'Create Listing',
    listing_edit: 'Edit Listing',
    listing_delete: 'Delete Listing',
    listing_title: 'Listing Title',
    listing_category: 'Category',
    listing_type_sale: 'For Sale',
    listing_type_rent: 'For Rent',
    listing_vehicles: 'Vehicles',
    listing_properties: 'Properties',
    listing_featured: 'Featured',
    listing_premium: 'Premium',
    listing_pending: 'Pending',
    listing_approved: 'Approved',
    listing_rejected: 'Rejected',
    listing_expired: 'Expired',
    listing_make: 'Make',
    listing_model: 'Model',
    listing_year: 'Year',
    listing_mileage: 'Mileage',
    listing_fuel_type: 'Fuel Type',
    listing_transmission: 'Transmission',
    listing_color: 'Color',
    listing_engine_size: 'Engine Size',
    listing_body_type: 'Body Type',
    listing_bedrooms: 'Bedrooms',
    listing_bathrooms: 'Bathrooms',
    listing_sqft: 'Square Footage',
    listing_property_type: 'Property Type',
    listing_furnished: 'Furnished',
    listing_year_built: 'Year Built',
    listing_parking: 'Parking',
    listing_asking_price: 'Asking Price',
    listing_negotiable: 'Negotiable',
    listing_steps_basic: 'Basic Info',
    listing_steps_details: 'Details',
    listing_steps_media: 'Media',
    listing_similar: 'Similar Listings',
    listing_views: 'Views',
    listing_inquiries: 'Inquiries',
    listing_contact_seller: 'Contact Seller',
    listing_report: 'Report',
    listing_renew: 'Renew',
    listing_deactivate: 'Deactivate',
    listing_reactivate: 'Reactivate',
    // Search
    search_placeholder: 'Search cars and properties...',
    search_advanced: 'Advanced Search',
    search_filters: 'Filters',
    search_sort_by: 'Sort By',
    search_relevance: 'Relevance',
    search_price_low_high: 'Price: Low to High',
    search_price_high_low: 'Price: High to Low',
    search_newest: 'Newest First',
    search_oldest: 'Oldest First',
    search_distance: 'Distance',
    search_clear_all: 'Clear All',
    search_apply: 'Apply',
    search_results_count: 'results found',
    search_no_listings: 'No listings found',
    search_location_placeholder: 'Enter location...',
    search_radius: 'Search Radius',
    // Favorites
    favorites_title: 'My Favorites',
    favorites_empty: 'No favorites yet',
    favorites_add: 'Add to Favorites',
    favorites_remove: 'Remove from Favorites',
    favorites_watchlist: 'Watchlist',
    favorites_create_list: 'Create New List',
    favorites_list_name: 'List Name',
    favorites_notes: 'Notes',
    // Messages
    messages_title: 'Messages',
    messages_inbox: 'Inbox',
    messages_sent: 'Sent',
    messages_compose: 'Compose',
    messages_to: 'To',
    messages_from: 'From',
    messages_subject: 'Subject',
    messages_body: 'Message',
    messages_send: 'Send',
    messages_reply: 'Reply',
    messages_read: 'Read',
    messages_unread: 'Unread',
    messages_block: 'Block User',
    messages_report: 'Report',
    messages_delete: 'Delete',
    messages_quick_reply: 'Quick Reply',
    messages_start_conversation: 'Start a conversation',
    messages_empty: 'No messages yet',
    // Seller
    seller_dashboard: 'Seller Dashboard',
    seller_listings: 'My Listings',
    seller_analytics: 'Analytics',
    seller_inquiries: 'Inquiries',
    seller_performance: 'Performance',
    seller_verification: 'Seller Verification',
    seller_verified: 'Verified',
    seller_unverified: 'Unverified',
    seller_pending_verification: 'Pending Verification',
    seller_upload_documents: 'Upload Documents',
    // Admin
    admin_dashboard: 'Admin Dashboard',
    admin_listings: 'Listings',
    admin_users: 'Users',
    admin_verification: 'Verification',
    admin_messages: 'Messages',
    admin_analytics: 'Analytics',
    admin_config: 'Configuration',
    admin_logs: 'System Logs',
    admin_approve: 'Approve',
    admin_reject: 'Reject',
    admin_suspend: 'Suspend',
    admin_delete_user: 'Delete User',
    admin_moderation: 'Moderation',
    admin_announcements: 'Announcements',
    admin_export: 'Export',
    // Payments
    payment_title: 'Payment',
    payment_amount: 'Amount',
    payment_method: 'Payment Method',
    payment_chapa: 'Chapa',
    payment_telebirr: 'Telebirr',
    payment_cbe: 'CBE',
    payment_receipt: 'Receipt',
    payment_history: 'Payment History',
    payment_confirm: 'Confirm Payment',
    payment_failed: 'Payment Failed',
    payment_success: 'Payment Successful',
    // Notifications
    notification_new_message: 'New message received',
    notification_listing_approved: 'Your listing has been approved',
    notification_listing_rejected: 'Your listing has been rejected',
    notification_watchlist_update: 'Watchlist item updated',
    notification_payment: 'Payment notification',
    notification_verification: 'Verification status updated',
    notification_mark_read: 'Mark as read',
    notification_clear_all: 'Clear all',
    // Reviews
    review_write: 'Write a Review',
    review_rating: 'Rating',
    review_title: 'Review Title',
    review_body: 'Review',
    review_submit: 'Submit Review',
    review_seller_response: 'Seller Response',
    review_no_reviews: 'No reviews yet',
    // Errors
    error_required: 'This field is required',
    error_email_invalid: 'Please enter a valid email address',
    error_password_weak: 'Password must be at least 8 characters',
    error_password_mismatch: 'Passwords do not match',
    error_phone_invalid: 'Please enter a valid phone number',
    error_network: 'Network error. Please try again.',
    error_server: 'Server error. Please try again later.',
    error_not_found: 'Page not found',
    error_unauthorized: 'You are not authorized to access this page',
    // Footer
    footer_about: 'About Us',
    footer_contact: 'Contact',
    footer_terms: 'Terms of Service',
    footer_privacy: 'Privacy Policy',
    footer_copyright: '© 2026 DreamMore. All rights reserved.',
    footer_help: 'Help Center',
    footer_faq: 'FAQ'
};
const am = {
    nav_home: 'መነሻ',
    nav_search: 'ፈልግ',
    nav_favorites: 'ተወዳጆች',
    nav_messages: 'መልዕክቶች',
    nav_my_listings: 'የእኔ ማሳየቶች',
    nav_create_listing: 'ማሳየት ይፍጠሩ',
    nav_profile: 'መገለጫ',
    nav_login: 'ግባ',
    nav_register: 'ተመዝገብ',
    nav_logout: 'ውጣ',
    nav_admin: 'የአስተዳዳሪ ፓነል',
    nav_inbox: 'የገቢ ሳንቲም',
    nav_notifications: 'ማሳውቂያዎች',
    common_save: 'አስቀምጥ',
    common_cancel: 'ሰርዝ',
    common_delete: 'ሰርዝ',
    common_edit: 'አስተካክል',
    common_submit: 'አስገባ',
    common_loading: 'በመጫን ላይ...',
    common_search: 'ፈልግ',
    common_filter: 'ማጣሪያ',
    common_sort: 'ደረጃ',
    common_price: 'ዋጋ',
    common_location: 'አድራሻ',
    common_description: 'መግለጫ',
    common_images: 'ምስሎች',
    common_status: 'ሁኔታ',
    common_date: 'ቀን',
    common_actions: 'ቅርጾች',
    common_back: 'ተመለስ',
    common_next: 'ቀጥል',
    common_previous: 'ቀዳሚ',
    common_confirm: 'አረጋግጥ',
    common_close: 'ዝጋ',
    common_yes: 'አዎ',
    common_no: 'አይደለም',
    common_view_all: 'ሁሉንም ይመልከቱ',
    common_no_results: 'ምርምር አልተገኘም',
    common_results: 'ምርምሮች',
    common_showing: 'ያሳያል',
    common_of: 'ከ',
    common_page: 'ገጽ',
    common_per_page: 'በገጽ',
    auth_login: 'ግባ',
    auth_register: 'ተመዝገብ',
    auth_email: 'ኢሜይል አድራሻ',
    auth_password: 'የይለፍ ቃል',
    auth_confirm_password: 'የይለፍ ቃል አረጋግጥ',
    auth_phone: 'ስልክ ቁጥር',
    auth_forgot_password: 'የይለፍ ቃል ረሳሽ?',
    auth_reset_password: 'የይለፍ ቃል አReset',
    auth_remember_me: 'አስታውሰኝ',
    auth_login_with_email: 'በኢሜይል ግባ',
    auth_login_with_phone: 'በስልክ ግባ',
    auth_otp_sent: 'OTP ቈጠሮ ቀርቧል',
    auth_enter_otp: 'የማረጋገጫ ቁጥር አስገባ',
    auth_verify: 'አረጋግጥ',
    auth_resend_otp: 'OTP አንዳንድ ወደ ላክ',
    auth_terms_agree: 'የአገልግሎት ውሎችንና የግላዊነት ፖሊሲን እስማማለሁ',
    auth_create_account: 'መለያ ይፍጠሩ',
    auth_already_have_account: 'መለያ አለዎ?',
    auth_dont_have_account: 'መለያ የለዎት?',
    auth_select_role: 'ሚናዎን ይምረጡ',
    auth_role_buyer: 'ገዢ',
    auth_role_seller: 'ሸጋጉ',
    auth_two_factor: 'ባለሁለት ደረጃ ህ討ነት',
    listing_create: 'ማሳየት ይፍጠሩ',
    listing_edit: 'ማሳየት አስተካክል',
    listing_delete: 'ማሳየት ሰርዝ',
    listing_title: 'የማሳየት ራስጌ',
    listing_category: 'ምድር',
    listing_type_sale: 'ለሽያጭ',
    listing_type_rent: 'ለ ጋ旅游度假村',
    listing_vehicles: 'የተORY assistantsTo avoid',
    listing_properties: 'ንብረቶች',
    listing_featured: 'ተወዳጅ',
    listing_premium: 'ፕሪሚየም',
    listing_pending: 'በመጠበቅ ላይ',
    listing_approved: 'ተፈቅዶ',
    listing_rejected: 'ተቋቋሞ',
    listing_expired: 'ጊዜው ያልበለጠ',
    listing_make: 'ስም',
    listing_model: 'ሞዴል',
    listing_year: 'ዓመት',
    listing_mileage: '讲 Mileage',
    listing_fuel_type: 'የነয়幕 ዓይነት',
    listing_transmission: '传输',
    listing_color: 'ቀለም',
    listing_engine_size: 'የሞተር መጠን',
    listing_body_type: 'የ车身 ዓይነት',
    listing_bedrooms: 'የመኝታ ክፍሎች',
    listing_bathrooms: 'የመታጠቢያ ክፍሎች',
    listing_sqft: 'ስኘር ፊት',
    listing_property_type: 'የንብረት ዓይነት',
    listing_furnished: 'ማቅolali',
    listing_year_built: 'የተሠራበት ዓመት',
    listing_parking: 'ፓርኪንግ',
    listing_asking_price: 'የሚፈልጉት ዋጋ',
    listing_negotiable: 'ይ_token协商',
    listing_steps_basic: '_basic መረጃ',
    listing_steps_details: 'ዝርዝሮች',
    listing_steps_media: 'ሚዲያ',
    listing_similar: 'ተመሳሳይ ማሳየቶች',
    listing_views: 'እይታ',
    listing_inquiries: 'ጥ觅',
    listing_contact_seller: 'ሸጋጉን ያግኙ',
    listing_report: 'Report',
    listing_renew: ' yak yet new ያድርጉ',
    listing_deactivate: 'ያጥፉ',
    listing_reactivate: 'ያስcratch',
    search_placeholder: '小型车 እና ንብረቶችን ፈልግ...',
    search_advanced: 'የተሻለ ምርምር',
    search_filters: 'ማጣሪያዎች',
    search_sort_by: 'ደረጃ በ',
    search_relevance: 'ተስBa ማስተካከያ',
    search_price_low_high: 'ዋጋ: ዝ 낮ה ወደ ከፍተኛ',
    search_price_high_low: 'ዋጋ: ከፍተኛ ወደ ዝ 낮ה',
    search_newest: 'አዲስ ቀዳሚ',
    search_oldest: 'አ oldest',
    search_distance: 'ไป距离',
    search_clear_all: 'ሁሉንም አጽዳ',
    search_apply: 'አተolina',
    search_results_count: 'ምርምሮች ተገኝተዋል',
    search_no_listings: 'ምንም ማሳየት አልተገኘም',
    search_location_placeholder: 'አድራሻ አስገባ...',
    search_radius: 'የምርምር ራዲየስ',
    favorites_title: 'የእኔ ተወዳጆች',
    favorites_empty: 'ተወዳጆች የለም',
    favorites_add: 'ተወዳጅ ያድርጉ',
    favorites_remove: 'ተወዳጅ ሰርዝ',
    favorites_watchlist: 'የተKept list',
    favorites_create_list: 'አዲስ ማ候选 list ይፍጠሩ',
    favorites_list_name: 'የማ候选 list ስም',
    favorites_notes: 'ማስታወሻዎች',
    messages_title: 'መልዕክቶች',
    messages_inbox: 'የገቢ ሳንቲም',
    messages_sent: 'የተላኩ',
    messages_compose: 'ያዐजር补贴',
    messages_to: 'ወደ',
    messages_from: 'ከ',
    messages_subject: 'ርዕስ',
    messages_body: 'መልዕክት',
    messages_send: 'ላክ',
    messages_reply: 'ተመለስ',
    messages_read: 'አንብር',
    messages_unread: 'ያልተነበበ',
    messages_block: 'ተጠቃሚ እ lock',
    messages_report: 'Report',
    messages_delete: 'ሰርዝ',
    messages_quick_reply: 'ፈጣን ተመለስ',
    messages_start_conversation: 'ውይይት ይጀምሩ',
    messages_empty: 'መልዕክቶች የለም',
    seller_dashboard: 'የሸጋጉ ዳሽቦርድ',
    seller_listings: 'የእኔ ማሳየቶች',
    seller_analytics: 'ትንታኔ',
    seller_inquiries: 'ጥ觅',
    seller_performance: 'አperformances',
    seller_verification: 'የሸጋጉ ማረጋገጫ',
    seller_verified: 'ተረጋግጧል',
    seller_unverified: 'ያልተረጋገጠ',
    seller_pending_verification: 'በማረጋገጫ ላይ',
    seller_upload_documents: 'ሰነዶች ጫን',
    admin_dashboard: 'የአስተዳዳሪ ዳሽቦርድ',
    admin_listings: 'ማሳየቶች',
    admin_users: 'ተጠቃሚዎች',
    admin_verification: 'ማረጋገጫ',
    admin_messages: 'መልዕክቶች',
    admin_analytics: 'ትንታኔ',
    admin_config: 'ማስተካከያ',
    admin_logs: 'የስርዓት ሎግ',
    admin_approve: 'ፍቀድ',
    admin_reject: 'አিን踰',
    admin_suspend: 'አ времен暂停',
    admin_delete_user: 'ተጠቃሚ ሰርዝ',
    admin_moderation: 'ማስተካከያ',
    admin_announcements: 'ማሳውቂያዎች',
    admin_export: 'ייצא',
    payment_title: 'ክፍያ',
    payment_amount: 'መጠን',
    payment_method: 'የክፍያ ዘዴ',
    payment_chapa: 'ቻፓ',
    payment_telebirr: 'ቴሌብር',
    payment_cbe: 'CBEE',
    payment_receipt: 'ደረሰኝ',
    payment_history: 'የክፍያ ታሪክ',
    payment_confirm: 'ክፍያ አረጋግጥ',
    payment_failed: 'ክፍያ አልተሳካም',
    payment_success: 'ክፍያ ተሳክቷል',
    notification_new_message: 'አዲስ መልዕክት ተገኝቷል',
    notification_listing_approved: 'ማሳየትዎ ተፈቅODO',
    notification_listing_rejected: 'ማሳየትዎ ተቋቋMO',
    notification_watchlist_update: 'የተKept list ተUpdate',
    notification_payment: 'የክፍያ ማሳውቂያ',
    notification_verification: 'የማረጋገጫ ሁኔታ ተUpdate',
    notification_mark_read: 'እንደተነበበ ምልክት',
    notification_clear_all: 'ሁሉንም አጽዳ',
    review_write: 'ግምገማ ይፃፉ',
    review_rating: 'ደረጃ',
    review_title: 'የግምገማ ራስጌ',
    review_body: 'ግምገማ',
    review_submit: 'ግምገማ አስገባ',
    review_seller_response: 'የሸጋጉ ምላሽ',
    review_no_reviews: 'ግምገማ የለም',
    error_required: 'ይህ ም_nd ያስፈልጋል',
    error_email_invalid: 'እባክዎ ትክክለኛ የኢሜይል አድራሻ ያስገቡ',
    error_password_weak: 'የይለፍ ቃል ቢያንስ 8 ቁርጭት መሆን አለበት',
    error_password_mismatch: 'የይለፍ ቃሎች አይስmaходятся',
    error_phone_invalid: 'እባክዎ ትክክለኛ የስልክ ቁጥር ያስገቡ',
    error_network: 'የአውታር ስህተት. እባክዎ እንደገና ይሞክሩ.',
    error_server: 'የአገልግሎት ስህተት. እባክዎ ቆይተህ ይሞክሩ.',
    error_not_found: 'ገጽ አልተገኘም',
    error_unauthorized: 'ይህንን ገጽ ለመድረስ ፈቃድ የለዎትም',
    footer_about: 'ስለ እኛ',
    footer_contact: 'ያግኙን',
    footer_terms: 'የአገልግሎት ውሎች',
    footer_privacy: 'የግላዊነት ፖሊሲ',
    footer_copyright: '© 2026 ዴREAMMore. ሁሉም መብቶች የተጠበቁ ናቸው.',
    footer_help: 'የእርዳታ ማዕከል',
    footer_faq: 'ተደጋጋሚ ጥያቄዎች'
};
const translations = {
    en,
    am
};
function t(key, locale = 'en') {
    return translations[locale][key] || translations.en[key] || key;
}
}),
]})(),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/dynamic-access-async-storage.external.js [external] (next/dist/server/app-render/dynamic-access-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/dynamic-access-async-storage.external.js", () => require("next/dist/server/app-render/dynamic-access-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/runtime-reacts.external.js [external] (next/dist/server/runtime-reacts.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/runtime-reacts.external.js", () => require("next/dist/server/runtime-reacts.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0dp5b67bxjb_-._.js.map