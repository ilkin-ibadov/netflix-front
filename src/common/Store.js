import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const themeStore = create(persist(
    (set) => ({
        theme: "light",
        toggle: () => set((state) => ({ theme: state.theme === "light" ? "dark" : "light" })),
    })
))
