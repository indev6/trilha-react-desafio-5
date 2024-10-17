import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://yqqvmgxhiefojtgomduf.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlxcXZtZ3hoaWVmb2p0Z29tZHVmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkxMDg1MTMsImV4cCI6MjA0NDY4NDUxM30.m4QLJjUZTBCvm67taHJwVi5Dn2RY96RLQlAviCAl8pE",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlxcXZtZ3hoaWVmb2p0Z29tZHVmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkxMDg1MTMsImV4cCI6MjA0NDY4NDUxM30.m4QLJjUZTBCvm67taHJwVi5Dn2RY96RLQlAviCAl8pE"
    }
})