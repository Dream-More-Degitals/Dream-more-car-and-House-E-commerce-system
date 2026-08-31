(()=>{"use strict";(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/client-providers.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ClientProviders
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$locale$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/context/locale-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/context/auth-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$notification$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/context/notification-context.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
function ClientProviders({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$context$2f$locale$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LocaleProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$context$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthProvider"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$context$2f$notification$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NotificationProvider"], {
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
_c = ClientProviders;
var _c;
__turbopack_context__.k.register(_c, "ClientProviders");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/context/auth-context.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthProvider",
    ()=>AuthProvider,
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
const SESSION_TIMEOUT = 45 * 60 * 1000 // 45 minutes
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
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
    _s();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "AuthProvider.useState": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const saved = localStorage.getItem('dreammore-session');
            if (saved) {
                try {
                    const parsed = JSON.parse(saved);
                    return parsed.user;
                } catch  {
                    localStorage.removeItem('dreammore-session');
                }
            }
            return null;
        }
    }["AuthProvider.useState"]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const lastActivityRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(Date.now());
    // Session timeout check
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthProvider.useEffect": ()=>{
            const checkSession = {
                "AuthProvider.useEffect.checkSession": ()=>{
                    if (user && Date.now() - lastActivityRef.current > SESSION_TIMEOUT) {
                        setUser(null);
                        localStorage.removeItem('dreammore-session');
                    }
                }
            }["AuthProvider.useEffect.checkSession"];
            const interval = setInterval(checkSession, 60000);
            return ({
                "AuthProvider.useEffect": ()=>clearInterval(interval)
            })["AuthProvider.useEffect"];
        }
    }["AuthProvider.useEffect"], [
        user
    ]);
    // Track user activity
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthProvider.useEffect": ()=>{
            const handleActivity = {
                "AuthProvider.useEffect.handleActivity": ()=>{
                    lastActivityRef.current = Date.now();
                }
            }["AuthProvider.useEffect.handleActivity"];
            window.addEventListener('mousemove', handleActivity);
            window.addEventListener('keydown', handleActivity);
            window.addEventListener('click', handleActivity);
            return ({
                "AuthProvider.useEffect": ()=>{
                    window.removeEventListener('mousemove', handleActivity);
                    window.removeEventListener('keydown', handleActivity);
                    window.removeEventListener('click', handleActivity);
                }
            })["AuthProvider.useEffect"];
        }
    }["AuthProvider.useEffect"], []);
    const login = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AuthProvider.useCallback[login]": async (email, password)=>{
            setIsLoading(true);
            // Simulate API delay
            await new Promise({
                "AuthProvider.useCallback[login]": (r)=>setTimeout(r, 800)
            }["AuthProvider.useCallback[login]"]);
            const found = MOCK_USERS.find({
                "AuthProvider.useCallback[login].found": (u)=>u.email === email && u.password === password
            }["AuthProvider.useCallback[login].found"]);
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
        }
    }["AuthProvider.useCallback[login]"], []);
    const loginWithOTP = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AuthProvider.useCallback[loginWithOTP]": async (phone)=>{
            setIsLoading(true);
            await new Promise({
                "AuthProvider.useCallback[loginWithOTP]": (r)=>setTimeout(r, 800)
            }["AuthProvider.useCallback[loginWithOTP]"]);
            const found = MOCK_USERS.find({
                "AuthProvider.useCallback[loginWithOTP].found": (u)=>u.phone === phone
            }["AuthProvider.useCallback[loginWithOTP].found"]);
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
        }
    }["AuthProvider.useCallback[loginWithOTP]"], []);
    const verifyOTP = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AuthProvider.useCallback[verifyOTP]": async (phone, otp)=>{
            setIsLoading(true);
            await new Promise({
                "AuthProvider.useCallback[verifyOTP]": (r)=>setTimeout(r, 500)
            }["AuthProvider.useCallback[verifyOTP]"]);
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
            const found = MOCK_USERS.find({
                "AuthProvider.useCallback[verifyOTP].found": (u)=>u.phone === phone
            }["AuthProvider.useCallback[verifyOTP].found"]);
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
        }
    }["AuthProvider.useCallback[verifyOTP]"], []);
    const register = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AuthProvider.useCallback[register]": async (data)=>{
            setIsLoading(true);
            await new Promise({
                "AuthProvider.useCallback[register]": (r)=>setTimeout(r, 1000)
            }["AuthProvider.useCallback[register]"]);
            if (!data.agreeToTerms) {
                setIsLoading(false);
                return {
                    success: false,
                    error: 'You must agree to the Terms of Service'
                };
            }
            if (MOCK_USERS.some({
                "AuthProvider.useCallback[register]": (u)=>u.email === data.email
            }["AuthProvider.useCallback[register]"])) {
                setIsLoading(false);
                return {
                    success: false,
                    error: 'Email already registered'
                };
            }
            if (MOCK_USERS.some({
                "AuthProvider.useCallback[register]": (u)=>u.phone === data.phone
            }["AuthProvider.useCallback[register]"])) {
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
        }
    }["AuthProvider.useCallback[register]"], []);
    const logout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AuthProvider.useCallback[logout]": ()=>{
            setUser(null);
            localStorage.removeItem('dreammore-session');
        }
    }["AuthProvider.useCallback[logout]"], []);
    const updateProfile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AuthProvider.useCallback[updateProfile]": (data)=>{
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
        }
    }["AuthProvider.useCallback[updateProfile]"], [
        user
    ]);
    const requestPasswordReset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AuthProvider.useCallback[requestPasswordReset]": async (email)=>{
            await new Promise({
                "AuthProvider.useCallback[requestPasswordReset]": (r)=>setTimeout(r, 800)
            }["AuthProvider.useCallback[requestPasswordReset]"]);
            const found = MOCK_USERS.find({
                "AuthProvider.useCallback[requestPasswordReset].found": (u)=>u.email === email
            }["AuthProvider.useCallback[requestPasswordReset].found"]);
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
        }
    }["AuthProvider.useCallback[requestPasswordReset]"], []);
    const resetPassword = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AuthProvider.useCallback[resetPassword]": async (token, newPassword)=>{
            await new Promise({
                "AuthProvider.useCallback[resetPassword]": (r)=>setTimeout(r, 800)
            }["AuthProvider.useCallback[resetPassword]"]);
            // In real app, validate token and update password
            console.log('Password reset with token:', token, 'new password length:', newPassword.length);
            return {
                success: true
            };
        }
    }["AuthProvider.useCallback[resetPassword]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
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
_s(AuthProvider, "ngUo9VQzn/3u+ihX7EHLqmEUCzI=");
_c = AuthProvider;
function useAuth() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (!context) throw new Error('useAuth must be used within AuthProvider');
    return context;
}
_s1(useAuth, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "AuthProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/context/locale-context.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LocaleProvider",
    ()=>LocaleProvider,
    "useLocale",
    ()=>useLocale
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/i18n.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
const LocaleContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function getInitialLocale() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const saved = localStorage.getItem('dreammore-locale');
    if (saved && (saved === 'en' || saved === 'am')) return saved;
    return 'en';
}
function LocaleProvider({ children }) {
    _s();
    const [locale, setLocaleState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(getInitialLocale);
    const setLocale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LocaleProvider.useCallback[setLocale]": (l)=>{
            setLocaleState(l);
            localStorage.setItem('dreammore-locale', l);
            document.documentElement.lang = l;
        }
    }["LocaleProvider.useCallback[setLocale]"], []);
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LocaleProvider.useCallback[t]": (key)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])(key, locale)
    }["LocaleProvider.useCallback[t]"], [
        locale
    ]);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "LocaleProvider.useMemo[value]": ()=>({
                locale,
                setLocale,
                t
            })
    }["LocaleProvider.useMemo[value]"], [
        locale,
        setLocale,
        t
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LocaleContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/context/locale-context.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_s(LocaleProvider, "VzUFOl/rr3iKKQKOyiyDs7fTyeQ=");
_c = LocaleProvider;
function useLocale() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(LocaleContext);
    if (!context) throw new Error('useLocale must be used within LocaleProvider');
    return context;
}
_s1(useLocale, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "LocaleProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/context/notification-context.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NotificationProvider",
    ()=>NotificationProvider,
    "useNotifications",
    ()=>useNotifications
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
const NotificationContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
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
    _s();
    const [notifications, setNotifications] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(getInitialNotifications);
    const unreadCount = notifications.filter((n)=>!n.isRead).length;
    const addNotification = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "NotificationProvider.useCallback[addNotification]": (n)=>{
            const newNotification = {
                ...n,
                id: Math.random().toString(36).substring(2, 9),
                isRead: false,
                createdAt: new Date().toISOString()
            };
            setNotifications({
                "NotificationProvider.useCallback[addNotification]": (prev)=>[
                        newNotification,
                        ...prev
                    ]
            }["NotificationProvider.useCallback[addNotification]"]);
        }
    }["NotificationProvider.useCallback[addNotification]"], []);
    const markAsRead = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "NotificationProvider.useCallback[markAsRead]": (id)=>{
            setNotifications({
                "NotificationProvider.useCallback[markAsRead]": (prev)=>prev.map({
                        "NotificationProvider.useCallback[markAsRead]": (n)=>n.id === id ? {
                                ...n,
                                isRead: true
                            } : n
                    }["NotificationProvider.useCallback[markAsRead]"])
            }["NotificationProvider.useCallback[markAsRead]"]);
        }
    }["NotificationProvider.useCallback[markAsRead]"], []);
    const markAllAsRead = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "NotificationProvider.useCallback[markAllAsRead]": ()=>{
            setNotifications({
                "NotificationProvider.useCallback[markAllAsRead]": (prev)=>prev.map({
                        "NotificationProvider.useCallback[markAllAsRead]": (n)=>({
                                ...n,
                                isRead: true
                            })
                    }["NotificationProvider.useCallback[markAllAsRead]"])
            }["NotificationProvider.useCallback[markAllAsRead]"]);
        }
    }["NotificationProvider.useCallback[markAllAsRead]"], []);
    const clearAll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "NotificationProvider.useCallback[clearAll]": ()=>{
            setNotifications([]);
        }
    }["NotificationProvider.useCallback[clearAll]"], []);
    const removeNotification = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "NotificationProvider.useCallback[removeNotification]": (id)=>{
            setNotifications({
                "NotificationProvider.useCallback[removeNotification]": (prev)=>prev.filter({
                        "NotificationProvider.useCallback[removeNotification]": (n)=>n.id !== id
                    }["NotificationProvider.useCallback[removeNotification]"])
            }["NotificationProvider.useCallback[removeNotification]"]);
        }
    }["NotificationProvider.useCallback[removeNotification]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NotificationContext.Provider, {
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
_s(NotificationProvider, "8F162vxiv5zLltCgpj5tpOplnsQ=");
_c = NotificationProvider;
function useNotifications() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(NotificationContext);
    if (!context) throw new Error('useNotifications must be used within NotificationProvider');
    return context;
}
_s1(useNotifications, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "NotificationProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/i18n.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/client/components/bfcache-state-manager.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useRouterBFCache", {
    enumerable: true,
    get: function() {
        return useRouterBFCache;
    }
});
const _react = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
// When the flag is disabled, only track the currently active tree
const MAX_BF_CACHE_ENTRIES = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 1;
function useRouterBFCache(activeTree, activeRenderTree, activeStateKey) {
    // The currently active entry. The entries form a linked list, sorted in
    // order of most recently active. This allows us to reuse parts of the list
    // without cloning, unless there's a reordering or removal.
    // TODO: Once we start tracking back/forward history at each route level,
    // we should use the history order instead. In other words, when traversing
    // to an existing entry as a result of a popstate event, we should maintain
    // the existing order instead of moving it to the front of the list. I think
    // an initial implementation of this could be to pass an incrementing id
    // to history.pushState/replaceState, then use that here for ordering.
    const [prevActiveEntry, setPrevActiveEntry] = (0, _react.useState)(()=>{
        const initialEntry = {
            tree: activeTree,
            renderTree: activeRenderTree,
            stateKey: activeStateKey,
            next: null
        };
        return initialEntry;
    });
    if (prevActiveEntry.tree === activeTree) {
        // Fast path. The active tree hasn't changed, so we can reuse the
        // existing state.
        return prevActiveEntry;
    }
    // The route tree changed. Note that this doesn't mean that the tree changed
    // *at this level* — the change may be due to a child route. Either way, we
    // need to either add or update the router tree in the bfcache.
    //
    // The rest of the code looks more complicated than it actually is because we
    // can't mutate the state in place; we have to copy-on-write.
    // Create a new entry for the active cache key. This is the head of the new
    // linked list.
    const newActiveEntry = {
        tree: activeTree,
        renderTree: activeRenderTree,
        stateKey: activeStateKey,
        next: null
    };
    // We need to append the old list onto the new list. If the head of the new
    // list was already present in the cache, then we'll need to clone everything
    // that came before it. Then we can reuse the rest.
    let n = 1;
    let oldEntry = prevActiveEntry;
    let clonedEntry = newActiveEntry;
    while(oldEntry !== null && n < MAX_BF_CACHE_ENTRIES){
        if (oldEntry.stateKey === activeStateKey) {
            // Fast path. This entry in the old list that corresponds to the key that
            // is now active. We've already placed a clone of this entry at the front
            // of the new list. We can reuse the rest of the old list without cloning.
            // NOTE: We don't need to worry about eviction in this case because we
            // haven't increased the size of the cache, and we assume the max size
            // is constant across renders. If we were to change it to a dynamic limit,
            // then the implementation would need to account for that.
            clonedEntry.next = oldEntry.next;
            break;
        } else {
            // Clone the entry and append it to the list.
            n++;
            const entry = {
                tree: oldEntry.tree,
                renderTree: oldEntry.renderTree,
                stateKey: oldEntry.stateKey,
                next: null
            };
            clonedEntry.next = entry;
            clonedEntry = entry;
        }
        oldEntry = oldEntry.next;
    }
    setPrevActiveEntry(newActiveEntry);
    return newActiveEntry;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/client/components/client-boundary-params.browser.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Browser variant of `./client-boundary-params`. In the browser the params and
// searchParams are created at render time rather than dynamically tracked.
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    createClientParams: null,
    createClientSearchParams: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    createClientParams: function() {
        return _paramsbrowser.createRenderParamsFromClient;
    },
    createClientSearchParams: function() {
        return _searchparamsbrowser.createRenderSearchParamsFromClient;
    }
});
const _paramsbrowser = __turbopack_context__.r("[project]/node_modules/next/dist/client/request/params.browser.js [app-client] (ecmascript)");
const _searchparamsbrowser = __turbopack_context__.r("[project]/node_modules/next/dist/client/request/search-params.browser.js [app-client] (ecmascript)");
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/client/components/client-page.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ClientPageRoot", {
    enumerable: true,
    get: function() {
        return ClientPageRoot;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
const _react = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
const _routeparams = __turbopack_context__.r("[project]/node_modules/next/dist/client/route-params.js [app-client] (ecmascript)");
const _hooksclientcontextsharedruntime = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/hooks-client-context.shared-runtime.js [app-client] (ecmascript)");
const _clientboundaryparams = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/client-boundary-params.browser.js [app-client] (ecmascript)");
function ClientPageRoot({ Component, serverProvidedParams }) {
    let searchParams;
    let params;
    if (serverProvidedParams !== null) {
        searchParams = serverProvidedParams.searchParams;
        params = serverProvidedParams.params;
    } else {
        // When Cache Components is enabled, the server does not pass the params as
        // props; they are parsed on the client and passed via context.
        const layoutRouterContext = (0, _react.use)(_approutercontextsharedruntime.LayoutRouterContext);
        params = layoutRouterContext !== null ? layoutRouterContext.parentParams : {};
        // This is an intentional behavior change: when Cache Components is enabled,
        // client segments receive the "canonical" search params, not the
        // rewritten ones. Users should either call useSearchParams directly or pass
        // the rewritten ones in from a Server Component.
        // TODO: Log a deprecation error when this object is accessed
        searchParams = (0, _routeparams.urlSearchParamsToParsedUrlQuery)((0, _react.use)(_hooksclientcontextsharedruntime.SearchParamsContext));
    }
    const clientSearchParams = (0, _clientboundaryparams.createClientSearchParams)(searchParams);
    const clientParams = (0, _clientboundaryparams.createClientParams)(params);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(Component, {
        params: clientParams,
        searchParams: clientSearchParams
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/client/components/client-segment.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ClientSegmentRoot", {
    enumerable: true,
    get: function() {
        return ClientSegmentRoot;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
const _react = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
const _clientboundaryparams = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/client-boundary-params.browser.js [app-client] (ecmascript)");
function ClientSegmentRoot({ Component, slots, serverProvidedParams }) {
    let params;
    if (serverProvidedParams !== null) {
        params = serverProvidedParams.params;
    } else {
        // When Cache Components is enabled, the server does not pass the params
        // as props; they are parsed on the client and passed via context.
        const layoutRouterContext = (0, _react.use)(_approutercontextsharedruntime.LayoutRouterContext);
        params = layoutRouterContext !== null ? layoutRouterContext.parentParams : {};
    }
    const clientParams = (0, _clientboundaryparams.createClientParams)(params);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(Component, {
        ...slots,
        params: clientParams
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/client/components/instant-validation/boundary.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    InstantValidationBoundaryContext: null,
    PlaceValidationBoundaryBelowThisLevel: null,
    RenderValidationBoundaryAtThisLevel: null,
    SlotMarker: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    InstantValidationBoundaryContext: function() {
        return _impl.InstantValidationBoundaryContext;
    },
    PlaceValidationBoundaryBelowThisLevel: function() {
        return _impl.PlaceValidationBoundaryBelowThisLevel;
    },
    RenderValidationBoundaryAtThisLevel: function() {
        return _impl.RenderValidationBoundaryAtThisLevel;
    },
    SlotMarker: function() {
        return _impl.SlotMarker;
    }
});
const _impl = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/instant-validation/impl.browser.js [app-client] (ecmascript)");
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/client/components/instant-validation/impl.browser.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    InstantValidationBoundaryContext: null,
    PlaceValidationBoundaryBelowThisLevel: null,
    RenderValidationBoundaryAtThisLevel: null,
    SlotMarker: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    InstantValidationBoundaryContext: function() {
        return InstantValidationBoundaryContext;
    },
    PlaceValidationBoundaryBelowThisLevel: function() {
        return PlaceValidationBoundaryBelowThisLevel;
    },
    RenderValidationBoundaryAtThisLevel: function() {
        return RenderValidationBoundaryAtThisLevel;
    },
    SlotMarker: function() {
        return SlotMarker;
    }
});
const InstantValidationBoundaryContext = null;
const PlaceValidationBoundaryBelowThisLevel = null;
const RenderValidationBoundaryAtThisLevel = null;
const SlotMarker = null;
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/client/components/layout-router.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    LoadingBoundaryProvider: null,
    default: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    LoadingBoundaryProvider: function() {
        return LoadingBoundaryProvider;
    },
    /**
 * OuterLayoutRouter handles the current segment as well as <Offscreen> rendering of other segments.
 * It can be rendered next to each other with a different `parallelRouterKey`, allowing for Parallel routes.
 */ default: function() {
        return OuterLayoutRouter;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
const _unresolvedthenable = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/unresolved-thenable.js [app-client] (ecmascript)");
const _errorboundary = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/error-boundary.js [app-client] (ecmascript)");
const _disablesmoothscroll = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/router/utils/disable-smooth-scroll.js [app-client] (ecmascript)");
const _redirectboundary = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/redirect-boundary.js [app-client] (ecmascript)");
const _errorboundary1 = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/http-access-fallback/error-boundary.js [app-client] (ecmascript)");
const _boundary = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/instant-validation/boundary.js [app-client] (ecmascript)");
const _createsegmentkey = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/router-reducer/create-segment-key.browser.js [app-client] (ecmascript)");
const _bfcachestatemanager = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/bfcache-state-manager.js [app-client] (ecmascript)");
const _apppaths = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/router/utils/app-paths.js [app-client] (ecmascript)");
const _hooksclientcontextsharedruntime = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/hooks-client-context.shared-runtime.js [app-client] (ecmascript)");
const _routeparams = __turbopack_context__.r("[project]/node_modules/next/dist/client/route-params.js [app-client] (ecmascript)");
const _rendertree = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/render-tree.js [app-client] (ecmascript)");
/**
 * Resolve the root scroll padding used by the viewport check.
 *
 * Computed lengths serialize as pixels, but percentages remain relative to
 * the scrollport. Preserve the existing behavior for values that still
 * contain unresolved CSS math.
 */ function getScrollPaddingTopInPixels(htmlElement, viewportHeight) {
    const scrollPaddingTop = getComputedStyle(htmlElement).scrollPaddingTop;
    const value = Number.parseFloat(scrollPaddingTop);
    if (!Number.isFinite(value) || value < 0) {
        return 0;
    }
    if (scrollPaddingTop.endsWith('px')) {
        return value;
    }
    if (scrollPaddingTop.endsWith('%')) {
        return value / 100 * viewportHeight;
    }
    return 0;
}
/**
 * Check where the top corner of the HTMLElement is relative to the usable
 * viewport.
 *
 * Scroll padding is resolved lazily so an empty Fragment does not trigger a
 * computed style read. The caller caches the value for the second check.
 */ function getScrollTargetState(instance, viewportHeight, getScrollPaddingTop) {
    const rects = instance.getClientRects();
    if (rects.length === 0) {
        return 0;
    }
    let elementTop = Number.POSITIVE_INFINITY;
    for(let i = 0; i < rects.length; i++){
        const rect = rects[i];
        if (rect.top < elementTop) {
            elementTop = rect.top;
        }
    }
    return elementTop >= getScrollPaddingTop() && elementTop <= viewportHeight ? 1 : 2;
}
/**
 * Find the DOM node for a hash fragment.
 * If `top` the page has to scroll to the top of the page. This mirrors the browser's behavior.
 * If the hash fragment is an id, the page has to scroll to the element with that id.
 * If the hash fragment is a name, the page has to scroll to the first element with that name.
 */ function getHashFragmentDomNode(hashFragment) {
    // If the hash fragment is `top` the page has to scroll to the top of the page.
    if (hashFragment === 'top') {
        return document.body;
    }
    // If the hash fragment is an id, the page has to scroll to the element with that id.
    return document.getElementById(hashFragment) ?? // If the hash fragment is a name, the page has to scroll to the first element with that name.
    document.getElementsByName(hashFragment)[0] ?? null;
}
/**
 * Uses Fragment refs for scrolling.
 * Does not focus the first host descendant.
 */ function InnerScrollHandler(props) {
    const childrenRef = _react.default.useRef(null);
    (0, _react.useLayoutEffect)(()=>{
        const { scrollRef: scrollHandlerRef, renderTree } = props;
        const scrollRef = scrollHandlerRef.forceScroll ? scrollHandlerRef.scrollRef : renderTree.data.scrollRef;
        if (scrollRef === null || !scrollRef.current) return;
        let instance = null;
        const hashFragment = scrollHandlerRef.hashFragment;
        if (hashFragment) {
            instance = getHashFragmentDomNode(hashFragment);
            if (instance === null) {
                // A missing hash target is still a handled scroll intent. Do not
                // fall back to the route Fragment or leave the intent pending.
                scrollRef.current = false;
                scrollHandlerRef.onlyHashChange = false;
                scrollHandlerRef.hashFragment = null;
                return;
            }
        } else {
            instance = childrenRef.current;
        }
        // If there is no DOM node this layout-router level is skipped. It'll be handled higher-up in the tree.
        if (instance === null) {
            return;
        }
        let didHandleScroll = false;
        (0, _disablesmoothscroll.disableSmoothScrollDuringRouteTransition)(()=>{
            const htmlElement = document.documentElement;
            let viewportHeight = null;
            let initialTargetState = null;
            let scrollPaddingTop = null;
            const getScrollPaddingTop = ()=>{
                if (scrollPaddingTop === null) {
                    // Reuse the style and layout update from the geometry read.
                    scrollPaddingTop = getScrollPaddingTopInPixels(htmlElement, viewportHeight);
                }
                return scrollPaddingTop;
            };
            if (!hashFragment) {
                // Store the current viewport height because reading `clientHeight` causes a reflow,
                // and it won't change during this function.
                viewportHeight = htmlElement.clientHeight;
                initialTargetState = getScrollTargetState(instance, viewportHeight, getScrollPaddingTop);
                // An empty Fragment is not a scroll target. In particular, avoid
                // React's sibling fallback and leave the scroll signal available
                // for another changed segment.
                if (initialTargetState === 0) {
                    return;
                }
            }
            didHandleScroll = true;
            // Mark as scrolled so no other segment scrolls for this navigation.
            scrollRef.current = false;
            // This handler intentionally leaves focus untouched; resetting focus on
            // navigation is deferred.
            // In case of hash scroll, we only need to scroll the element into view
            if (hashFragment) {
                instance.scrollIntoView();
                return;
            }
            // If the element's top edge is already in the viewport, exit early.
            if (initialTargetState === 1) {
                return;
            }
            // Otherwise, try scrolling go the top of the document to be backward compatible with pages
            // scrollIntoView() called on `<html/>` element scrolls horizontally on chrome and firefox (that shouldn't happen)
            // We could use it to scroll horizontally following RTL but that also seems to be broken - it will always scroll left
            // scrollLeft = 0 also seems to ignore RTL and manually checking for RTL is too much hassle so we will scroll just vertically
            htmlElement.scrollTop = 0;
            // Scroll to domNode if domNode is not in viewport when scrolled to top of document
            if (getScrollTargetState(instance, viewportHeight, getScrollPaddingTop) === 2) {
                // Scroll into view doesn't scroll horizontally by default when not needed
                instance.scrollIntoView();
            }
        }, {
            // We will force layout by querying domNode position
            dontForceLayout: true,
            onlyHashChange: scrollHandlerRef.onlyHashChange
        });
        if (!didHandleScroll) {
            return;
        }
        // Mutate after scrolling so that it can be read by `disableSmoothScrollDuringRouteTransition`
        scrollHandlerRef.onlyHashChange = false;
        scrollHandlerRef.hashFragment = null;
    }, // but be prepared for lots of manual testing.
    undefined);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_react.Fragment, {
        ref: childrenRef,
        children: props.children
    });
}
function ScrollHandler({ children, renderTree }) {
    const context = (0, _react.useContext)(_approutercontextsharedruntime.GlobalLayoutRouterContext);
    if (!context) {
        throw new Error('invariant global layout router not mounted');
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(InnerScrollHandler, {
        scrollRef: context.scrollRef,
        renderTree: renderTree,
        children: children
    });
}
/**
 * InnerLayoutRouter handles rendering the provided segment based on the cache.
 */ function InnerLayoutRouter({ tree, segmentPath, debugNameContext, renderTree, params, url, isActive }) {
    const context = (0, _react.useContext)(_approutercontextsharedruntime.GlobalLayoutRouterContext);
    const parentNavPromises = (0, _react.useContext)(_hooksclientcontextsharedruntime.NavigationPromisesContext);
    if (!context) {
        throw new Error('invariant global layout router not mounted');
    }
    // `rsc` represents the renderable node for this segment.
    // If this segment has a `prefetchRsc`, it's the statically prefetched data.
    // We should use that on initial render instead of `rsc`. Then we'll switch
    // to `rsc` when the dynamic response streams in.
    //
    // If no prefetch data is available, then we go straight to rendering `rsc`.
    const resolvedPrefetchRsc = renderTree.data.prefetchRsc !== null ? renderTree.data.prefetchRsc : renderTree.data.rsc;
    // We use `useDeferredValue` to handle switching between the prefetched and
    // final values. The second argument is returned on initial render, then it
    // re-renders with the first argument.
    const rsc = (0, _react.useDeferredValue)(renderTree.data.rsc, resolvedPrefetchRsc);
    // `rsc` is either a React node or a promise for a React node, except we
    // special case `null` to represent that this segment's data is missing. If
    // it's a promise, we need to unwrap it so we can determine whether or not the
    // data is missing.
    let resolvedRsc;
    if ((0, _rendertree.isDeferredRsc)(rsc)) {
        const unwrappedRsc = (0, _react.use)(rsc);
        if (unwrappedRsc === null) {
            // If the promise was resolved to `null`, it means the data for this
            // segment was not returned by the server. Suspend indefinitely. When this
            // happens, the router is responsible for triggering a new state update to
            // un-suspend this segment.
            (0, _react.use)(_unresolvedthenable.unresolvedThenable);
        }
        resolvedRsc = unwrappedRsc;
    } else {
        // This is not a deferred RSC promise. Don't need to unwrap it.
        if (rsc === null) {
            (0, _react.use)(_unresolvedthenable.unresolvedThenable);
        }
        resolvedRsc = rsc;
    }
    // In dev, we create a NavigationPromisesContext containing the instrumented promises that provide
    // `useSelectedLayoutSegment` and `useSelectedLayoutSegments`.
    // Promises are cached outside of render to survive suspense retries.
    let navigationPromises = null;
    if ("TURBOPACK compile-time truthy", 1) {
        const { createNestedLayoutNavigationPromises } = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation-devtools.js [app-client] (ecmascript)");
        navigationPromises = createNestedLayoutNavigationPromises(tree, parentNavPromises);
    }
    let children = resolvedRsc;
    if (navigationPromises) {
        children = /*#__PURE__*/ (0, _jsxruntime.jsx)(_hooksclientcontextsharedruntime.NavigationPromisesContext.Provider, {
            value: navigationPromises,
            children: resolvedRsc
        });
    }
    children = /*#__PURE__*/ (0, _jsxruntime.jsx)(_approutercontextsharedruntime.LayoutRouterContext.Provider, {
        value: {
            parentTree: tree,
            parentRenderTree: renderTree,
            parentSegmentPath: segmentPath,
            parentParams: params,
            // This is always set to null as we enter a child segment. It's
            // populated by LoadingBoundaryProvider the next time we reach a
            // loading boundary.
            parentLoadingData: null,
            debugNameContext: debugNameContext,
            // TODO-APP: overriding of url for parallel routes
            url: url,
            isActive: isActive
        },
        children: children
    });
    return children;
}
function LoadingBoundaryProvider({ loading, children }) {
    // Provides the data needed to render a loading.tsx boundary, via context.
    //
    // loading.tsx creates a Suspense boundary around each of a layout's child
    // slots. (Might be bit confusing to think about the data flow, but: if
    // loading.tsx and layout.tsx are in the same directory, they are assigned
    // to the same render tree.)
    //
    // This provider component does not render the Suspense boundary directly;
    // that's handled by LoadingBoundary.
    //
    // TODO: For simplicity, we should combine this provider with LoadingBoundary
    // and render the Suspense boundary directly. The only real benefit of doing
    // it separately is so that when there are multiple parallel routes, we only
    // send the boundary data once, rather than once per child. But that's a
    // negligible benefit and can be achieved via caching instead.
    const parentContext = (0, _react.use)(_approutercontextsharedruntime.LayoutRouterContext);
    if (parentContext === null) {
        return children;
    }
    // All values except for parentLoadingData are the same as the parent context.
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_approutercontextsharedruntime.LayoutRouterContext.Provider, {
        value: {
            parentTree: parentContext.parentTree,
            parentRenderTree: parentContext.parentRenderTree,
            parentSegmentPath: parentContext.parentSegmentPath,
            parentParams: parentContext.parentParams,
            parentLoadingData: loading,
            debugNameContext: parentContext.debugNameContext,
            url: parentContext.url,
            isActive: parentContext.isActive
        },
        children: children
    });
}
/**
 * Renders suspense boundary with the provided "loading" property as the fallback.
 * If no loading property is provided it renders the children without a suspense boundary.
 */ function LoadingBoundary({ name, loading, children }) {
    // TODO: For LoadingBoundary, and the other built-in boundary types, don't
    // wrap in an extra function component if no user-defined boundary is
    // provided. In other words, inline this conditional wrapping logic into
    // the parent component. More efficient and keeps unnecessary junk out of
    // the component stack.
    if (loading !== null) {
        const loadingRsc = loading[0];
        const loadingStyles = loading[1];
        const loadingScripts = loading[2];
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(_react.Suspense, {
            name: name,
            fallback: /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
                children: [
                    loadingStyles,
                    loadingScripts,
                    loadingRsc
                ]
            }),
            children: children
        });
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
        children: children
    });
}
function OuterLayoutRouter({ parallelRouterKey, error, errorStyles, errorScripts, templateStyles, templateScripts, template, notFound, forbidden, unauthorized, segmentViewBoundaries }) {
    const context = (0, _react.useContext)(_approutercontextsharedruntime.LayoutRouterContext);
    if (!context) {
        throw new Error('invariant expected layout router to be mounted');
    }
    const { parentTree, parentRenderTree, parentSegmentPath, parentParams, parentLoadingData, url, isActive, debugNameContext } = context;
    // Get the render tree for this segment by reading it from the parent segment's
    // child map.
    const parentTreeSegment = parentTree[0];
    const segmentPath = parentSegmentPath === null ? // the code. We should clean this up.
    [
        parallelRouterKey
    ] : parentSegmentPath.concat([
        parentTreeSegment,
        parallelRouterKey
    ]);
    // The "state" key of a segment is the one passed to React. In the browser it
    // represents the identity of the UI tree. Whenever the state key changes,
    // the tree is recreated and the state is reset. In the App Router model,
    // search params do not cause state to be lost, so two segments with the same
    // segment path but different search params should have the same state key.
    // On the server, the key describes the segment's structure instead, so it
    // stays the same when unknown params become known during HTML resume.
    //
    // Whether the data can be reused is tracked separately, by the segment
    // cache's vary paths.
    const activeTree = parentTree[1][parallelRouterKey];
    const activeRenderTree = parentRenderTree.slots?.get(parallelRouterKey);
    if (activeTree === undefined || activeRenderTree === undefined) {
        // Could not find a matching segment. The client tree is inconsistent with
        // the server tree. Suspend indefinitely; the router will have already
        // detected the inconsistency when handling the server response, and
        // triggered a refresh of the page to recover.
        (0, _react.use)(_unresolvedthenable.unresolvedThenable);
    }
    let maybeValidationBoundaryId = null;
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const activeSegment = activeTree[0];
    const activeStateKey = (0, _createsegmentkey.createSegmentKey)(activeSegment);
    // At each level of the route tree, not only do we render the currently
    // active segment — we also render the last N segments that were active at
    // this level inside a hidden <Activity> boundary, to preserve their state
    // if or when the user navigates to them again.
    //
    // bfcacheEntry is a linked list of FlightRouterStates.
    let bfcacheEntry = (0, _bfcachestatemanager.useRouterBFCache)(activeTree, activeRenderTree, activeStateKey);
    let children = [];
    do {
        const tree = bfcacheEntry.tree;
        const renderTree = bfcacheEntry.renderTree;
        const stateKey = bfcacheEntry.stateKey;
        const segment = tree[0];
        /*
    - Error boundary
      - Only renders error boundary if error component is provided.
      - Rendered for each segment to ensure they have their own error state.
      - When gracefully degrade for bots, skip rendering error boundary.
    - Loading boundary
      - Only renders suspense boundary if loading components is provided.
      - Rendered for each segment to ensure they have their own loading state.
      - Passed to the router during rendering to ensure it can be immediately rendered when suspending on a Flight fetch.
  */ let segmentBoundaryTriggerNode = null;
        let segmentViewStateNode = null;
        if ("TURBOPACK compile-time truthy", 1) {
            const { SegmentBoundaryTriggerNode, SegmentViewStateNode } = __turbopack_context__.r("[project]/node_modules/next/dist/next-devtools/userspace/app/segment-explorer-node.js [app-client] (ecmascript)");
            const pagePrefix = (0, _apppaths.normalizeAppPath)(url);
            segmentViewStateNode = /*#__PURE__*/ (0, _jsxruntime.jsx)(SegmentViewStateNode, {
                page: pagePrefix
            }, pagePrefix);
            segmentBoundaryTriggerNode = /*#__PURE__*/ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
                children: /*#__PURE__*/ (0, _jsxruntime.jsx)(SegmentBoundaryTriggerNode, {})
            });
        }
        let params = parentParams;
        if (Array.isArray(segment)) {
            // This segment contains a route param. Accumulate these as we traverse
            // down the router tree. The result represents the set of params that
            // the layout/page components are permitted to access below this point.
            const paramName = segment[0];
            const paramCacheKey = segment[1];
            const paramType = segment[2];
            const paramValue = (0, _routeparams.getParamValueFromCacheKey)(paramCacheKey, paramType);
            if (paramValue !== null) {
                params = {
                    ...parentParams,
                    [paramName]: paramValue
                };
            }
        }
        const debugName = getBoundaryDebugNameFromSegment(segment);
        // `debugNameContext` represents the nearest non-"virtual" parent segment.
        // `getBoundaryDebugNameFromSegment` returns undefined for virtual segments.
        // So if `debugName` is undefined, the context is passed through unchanged.
        const childDebugNameContext = debugName ?? debugNameContext;
        // In practical terms, clicking this name in the Suspense DevTools
        // should select the child slots of that layout.
        //
        // So the name we apply to the Activity boundary is actually based on
        // the nearest parent segments.
        //
        // We skip over "virtual" parents, i.e. ones inserted by Next.js that
        // don't correspond to application-defined code.
        const isVirtual = debugName === undefined;
        const debugNameToDisplay = isVirtual ? undefined : debugNameContext;
        let templateValue = /*#__PURE__*/ (0, _jsxruntime.jsxs)(ScrollHandler, {
            renderTree: renderTree,
            children: [
                /*#__PURE__*/ (0, _jsxruntime.jsx)(_errorboundary.ErrorBoundary, {
                    errorComponent: error,
                    errorStyles: errorStyles,
                    errorScripts: errorScripts,
                    children: /*#__PURE__*/ (0, _jsxruntime.jsx)(LoadingBoundary, {
                        name: debugNameToDisplay,
                        // TODO: The loading module data for a segment is stored on the
                        // parent, then applied to each of that parent segment's
                        // parallel route slots. In the simple case where there's only
                        // one parallel route (the `children` slot), this is no
                        // different from if the loading module data were stored on the
                        // child directly. But I'm not sure this actually makes sense
                        // when there are multiple parallel routes. It's not a huge
                        // issue because you always have the option to define a narrower
                        // loading boundary for a particular slot. But this sort of
                        // smells like an implementation accident to me.
                        loading: parentLoadingData,
                        children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_errorboundary1.HTTPAccessFallbackBoundary, {
                            notFound: notFound,
                            forbidden: forbidden,
                            unauthorized: unauthorized,
                            children: /*#__PURE__*/ (0, _jsxruntime.jsxs)(_redirectboundary.RedirectBoundary, {
                                children: [
                                    /*#__PURE__*/ (0, _jsxruntime.jsx)(InnerLayoutRouter, {
                                        url: url,
                                        tree: tree,
                                        params: params,
                                        renderTree: renderTree,
                                        segmentPath: segmentPath,
                                        debugNameContext: childDebugNameContext,
                                        isActive: isActive && stateKey === activeStateKey
                                    }),
                                    segmentBoundaryTriggerNode
                                ]
                            })
                        })
                    })
                }),
                segmentViewStateNode
            ]
        });
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        let child = /*#__PURE__*/ (0, _jsxruntime.jsxs)(_approutercontextsharedruntime.TemplateContext.Provider, {
            value: templateValue,
            children: [
                templateStyles,
                templateScripts,
                template
            ]
        }, stateKey);
        if ("TURBOPACK compile-time truthy", 1) {
            const { SegmentStateProvider } = __turbopack_context__.r("[project]/node_modules/next/dist/next-devtools/userspace/app/segment-explorer-node.js [app-client] (ecmascript)");
            child = /*#__PURE__*/ (0, _jsxruntime.jsxs)(SegmentStateProvider, {
                children: [
                    child,
                    segmentViewBoundaries
                ]
            }, stateKey);
        }
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        children.push(child);
        bfcacheEntry = bfcacheEntry.next;
    }while (bfcacheEntry !== null)
    return children;
}
function getBoundaryDebugNameFromSegment(segment) {
    if (segment === '/') {
        // Reached the root
        return '/';
    }
    if (typeof segment === 'string') {
        if (isVirtualLayout(segment)) {
            return undefined;
        } else {
            return segment + '/';
        }
    }
    const paramCacheKey = segment[1];
    return paramCacheKey + '/';
}
function isVirtualLayout(segment) {
    return(// (like __PAGE__ and __DEFAULT__) to avoid collisions with
    // user-defined route groups.
    segment === '(__SLOT__)');
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/client/components/render-from-template-context.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return RenderFromTemplateContext;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
function RenderFromTemplateContext() {
    const children = (0, _react.useContext)(_approutercontextsharedruntime.TemplateContext);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
        children: children
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/client/request/params.browser.dev.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createRenderParamsFromClient", {
    enumerable: true,
    get: function() {
        return createRenderParamsFromClient;
    }
});
const _reflect = __turbopack_context__.r("[project]/node_modules/next/dist/server/web/spec-extension/adapters/reflect.js [app-client] (ecmascript)");
const _reflectutils = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/utils/reflect-utils.js [app-client] (ecmascript)");
const CachedParams = new WeakMap();
function makeDynamicallyTrackedParamsWithDevWarnings(underlyingParams) {
    const cachedParams = CachedParams.get(underlyingParams);
    if (cachedParams) {
        return cachedParams;
    }
    const promise = Promise.resolve(underlyingParams);
    const proxiedProperties = new Set();
    Object.keys(underlyingParams).forEach((prop)=>{
        if (_reflectutils.wellKnownProperties.has(prop)) {
        // These properties cannot be shadowed because they need to be the
        // true underlying value for Promises to work correctly at runtime
        } else {
            proxiedProperties.add(prop);
        }
    });
    const proxiedPromise = new Proxy(promise, {
        get (target, prop, receiver) {
            if (typeof prop === 'string') {
                if (proxiedProperties.has(prop)) {
                    const expression = (0, _reflectutils.describeStringPropertyAccess)('params', prop);
                    warnForSyncAccess(expression);
                }
            }
            return _reflect.ReflectAdapter.get(target, prop, receiver);
        },
        set (target, prop, value, receiver) {
            if (typeof prop === 'string') {
                proxiedProperties.delete(prop);
            }
            return _reflect.ReflectAdapter.set(target, prop, value, receiver);
        },
        ownKeys (target) {
            warnForEnumeration();
            return Reflect.ownKeys(target);
        }
    });
    proxiedPromise.status = 'fulfilled';
    proxiedPromise.value = underlyingParams;
    CachedParams.set(underlyingParams, proxiedPromise);
    return proxiedPromise;
}
function warnForSyncAccess(expression) {
    console.error(`A param property was accessed directly with ${expression}. ` + `\`params\` is a Promise and must be unwrapped with \`React.use()\` before accessing its properties. ` + `Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`);
}
function warnForEnumeration() {
    console.error(`params are being enumerated. ` + `\`params\` is a Promise and must be unwrapped with \`React.use()\` before accessing its properties. ` + `Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`);
}
function createRenderParamsFromClient(clientParams) {
    return makeDynamicallyTrackedParamsWithDevWarnings(clientParams);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/client/request/params.browser.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createRenderParamsFromClient", {
    enumerable: true,
    get: function() {
        return createRenderParamsFromClient;
    }
});
const createRenderParamsFromClient = ("TURBOPACK compile-time truthy", 1) ? __turbopack_context__.r("[project]/node_modules/next/dist/client/request/params.browser.dev.js [app-client] (ecmascript)").createRenderParamsFromClient : "TURBOPACK unreachable";
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/client/request/search-params.browser.dev.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createRenderSearchParamsFromClient", {
    enumerable: true,
    get: function() {
        return createRenderSearchParamsFromClient;
    }
});
const _reflect = __turbopack_context__.r("[project]/node_modules/next/dist/server/web/spec-extension/adapters/reflect.js [app-client] (ecmascript)");
const _reflectutils = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/utils/reflect-utils.js [app-client] (ecmascript)");
const CachedSearchParams = new WeakMap();
function makeUntrackedSearchParamsWithDevWarnings(underlyingSearchParams) {
    const cachedSearchParams = CachedSearchParams.get(underlyingSearchParams);
    if (cachedSearchParams) {
        return cachedSearchParams;
    }
    const proxiedProperties = new Set();
    const promise = Promise.resolve(underlyingSearchParams);
    Object.keys(underlyingSearchParams).forEach((prop)=>{
        if (_reflectutils.wellKnownProperties.has(prop)) {
        // These properties cannot be shadowed because they need to be the
        // true underlying value for Promises to work correctly at runtime
        } else {
            proxiedProperties.add(prop);
        }
    });
    const proxiedPromise = new Proxy(promise, {
        get (target, prop, receiver) {
            if (typeof prop === 'string') {
                if (!_reflectutils.wellKnownProperties.has(prop) && (proxiedProperties.has(prop) || // We are accessing a property that doesn't exist on the promise nor
                // the underlying searchParams.
                Reflect.has(target, prop) === false)) {
                    const expression = (0, _reflectutils.describeStringPropertyAccess)('searchParams', prop);
                    warnForSyncAccess(expression);
                }
            }
            return _reflect.ReflectAdapter.get(target, prop, receiver);
        },
        set (target, prop, value, receiver) {
            if (typeof prop === 'string') {
                proxiedProperties.delete(prop);
            }
            return Reflect.set(target, prop, value, receiver);
        },
        has (target, prop) {
            if (typeof prop === 'string') {
                if (!_reflectutils.wellKnownProperties.has(prop) && (proxiedProperties.has(prop) || // We are accessing a property that doesn't exist on the promise nor
                // the underlying searchParams.
                Reflect.has(target, prop) === false)) {
                    const expression = (0, _reflectutils.describeHasCheckingStringProperty)('searchParams', prop);
                    warnForSyncAccess(expression);
                }
            }
            return Reflect.has(target, prop);
        },
        ownKeys (target) {
            warnForSyncSpread();
            return Reflect.ownKeys(target);
        }
    });
    proxiedPromise.status = 'fulfilled';
    proxiedPromise.value = underlyingSearchParams;
    CachedSearchParams.set(underlyingSearchParams, proxiedPromise);
    return proxiedPromise;
}
function warnForSyncAccess(expression) {
    console.error(`A searchParam property was accessed directly with ${expression}. ` + `\`searchParams\` is a Promise and must be unwrapped with \`React.use()\` before accessing its properties. ` + `Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`);
}
function warnForSyncSpread() {
    console.error(`The keys of \`searchParams\` were accessed directly. ` + `\`searchParams\` is a Promise and must be unwrapped with \`React.use()\` before accessing its properties. ` + `Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`);
}
function createRenderSearchParamsFromClient(underlyingSearchParams) {
    return makeUntrackedSearchParamsWithDevWarnings(underlyingSearchParams);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/client/request/search-params.browser.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createRenderSearchParamsFromClient", {
    enumerable: true,
    get: function() {
        return createRenderSearchParamsFromClient;
    }
});
const createRenderSearchParamsFromClient = ("TURBOPACK compile-time truthy", 1) ? __turbopack_context__.r("[project]/node_modules/next/dist/client/request/search-params.browser.dev.js [app-client] (ecmascript)").createRenderSearchParamsFromClient : "TURBOPACK unreachable";
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/node_modules/next/dist/lib/metadata/generate/icon-mark.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "IconMark", {
    enumerable: true,
    get: function() {
        return IconMark;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const IconMark = ()=>{
    if (typeof window !== 'undefined') {
        return null;
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("meta", {
        name: "\xabnxt-icon\xbb"
    });
};
}),
"[project]/node_modules/next/dist/server/web/spec-extension/adapters/reflect.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ReflectAdapter", {
    enumerable: true,
    get: function() {
        return ReflectAdapter;
    }
});
class ReflectAdapter {
    static get(target, prop, receiver) {
        const value = Reflect.get(target, prop, receiver);
        if (typeof value === 'function') {
            return value.bind(target);
        }
        return value;
    }
    static set(target, prop, value, receiver) {
        return Reflect.set(target, prop, value, receiver);
    }
    static has(target, prop) {
        return Reflect.has(target, prop);
    }
    static deleteProperty(target, prop) {
        return Reflect.deleteProperty(target, prop);
    }
}
}),
"[project]/node_modules/next/dist/shared/lib/router/utils/disable-smooth-scroll.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * Run function with `scroll-behavior: auto` applied to `<html/>`.
 * This css change will be reverted after the function finishes.
 */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "disableSmoothScrollDuringRouteTransition", {
    enumerable: true,
    get: function() {
        return disableSmoothScrollDuringRouteTransition;
    }
});
function disableSmoothScrollDuringRouteTransition(fn, options = {}) {
    // if only the hash is changed, we don't need to disable smooth scrolling
    // we only care to prevent smooth scrolling when navigating to a new page to avoid jarring UX
    if (options.onlyHashChange) {
        fn();
        return;
    }
    const htmlElement = document.documentElement;
    const hasDataAttribute = htmlElement.dataset.scrollBehavior === 'smooth';
    if (!hasDataAttribute) {
        // Warn if smooth scrolling is detected but no data attribute is present
        if (("TURBOPACK compile-time value", "development") === 'development' && getComputedStyle(htmlElement).scrollBehavior === 'smooth') {
            const { warnOnce } = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/utils/warn-once.js [app-client] (ecmascript)");
            warnOnce('Detected `scroll-behavior: smooth` on the `<html>` element. To disable smooth scrolling during route transitions, ' + 'add `data-scroll-behavior="smooth"` to your <html> element. ' + 'Learn more: https://nextjs.org/docs/messages/missing-data-scroll-behavior');
        }
        // No smooth scrolling configured, run directly without style manipulation
        fn();
        return;
    }
    // Proceed with temporarily disabling smooth scrolling
    const existing = htmlElement.style.scrollBehavior;
    htmlElement.style.scrollBehavior = 'auto';
    if (!options.dontForceLayout) {
        // In Chrome-based browsers we need to force reflow before calling `scrollTo`.
        // Otherwise it will not pickup the change in scrollBehavior
        // More info here: https://github.com/vercel/next.js/issues/40719#issuecomment-1336248042
        htmlElement.getClientRects();
    }
    fn();
    htmlElement.style.scrollBehavior = existing;
}
}),
"[project]/node_modules/next/dist/shared/lib/utils/reflect-utils.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// This regex will have fast negatives meaning valid identifiers may not pass
// this test. However this is only used during static generation to provide hints
// about why a page bailed out of some or all prerendering and we can use bracket notation
// for example while `ಠ_ಠ` is a valid identifier it's ok to print `searchParams['ಠ_ಠ']`
// even if this would have been fine too `searchParams.ಠ_ಠ`
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    describeHasCheckingStringProperty: null,
    describeStringPropertyAccess: null,
    wellKnownProperties: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    describeHasCheckingStringProperty: function() {
        return describeHasCheckingStringProperty;
    },
    describeStringPropertyAccess: function() {
        return describeStringPropertyAccess;
    },
    wellKnownProperties: function() {
        return wellKnownProperties;
    }
});
const isDefinitelyAValidIdentifier = /^[A-Za-z_$][A-Za-z0-9_$]*$/;
function describeStringPropertyAccess(target, prop) {
    if (isDefinitelyAValidIdentifier.test(prop)) {
        return `\`${target}.${prop}\``;
    }
    return `\`${target}[${JSON.stringify(prop)}]\``;
}
function describeHasCheckingStringProperty(target, prop) {
    const stringifiedProp = JSON.stringify(prop);
    return `\`Reflect.has(${target}, ${stringifiedProp})\`, \`${stringifiedProp} in ${target}\`, or similar`;
}
const wellKnownProperties = new Set([
    'hasOwnProperty',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'toString',
    'valueOf',
    'toLocaleString',
    // Promise prototype
    'then',
    'catch',
    'finally',
    // React Promise extension
    'status',
    // 'value',
    // 'error',
    // React introspection
    'displayName',
    '_debugInfo',
    // Common tested properties
    'toJSON',
    '$$typeof',
    '__esModule',
    // Tested by flight when checking for iterables
    '@@iterator'
]);
}),
]);})()

//# sourceMappingURL=_1qaiep4qv3mo8._.js.map