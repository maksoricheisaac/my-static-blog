"use client"
import { useRouter } from "next/navigation";

export default function Article(){
    const router = useRouter()
    router.push('/')
}