// license-check.ts
export async function checkLicense(): Promise<boolean> {
  const apiUrl = 'https://spaces-liscence.netlify.app/.netlify/functions/license';

  try {
    const res = await fetch(apiUrl);
    if (!res.ok) throw new Error(`HTTP error: ${res.status}`);

    const data: { status: string } = await res.json();
    console.log("License Status:", data.status);

    if (data.status === 'valid') {
      return true; // ✅ allow access
    } else {
      // ❌ license invalid → redirect
      window.location.href = '/payment-required.html';
      return false;
    }
  } catch (err) {
    console.error("License check failed:", err);
    // fallback → redirect
    window.location.href = '/payment-required.html';
    return false;
  }
}
