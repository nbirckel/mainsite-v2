
const WEBMENTION_BASE_URL = "https://webmention.io/api/mentions.jf2";

module.exports = async () => {
  const domain = "www.nicolas-birckel.fr;" // e.g. lukeb.co.uk
  const token = "-a-Yj8YaN2kG6-zBnmlTmQ"; // found at the bottom of https://webmention.io/settings

  const url = `${WEBMENTION_BASE_URL}?domain=${domain}&token=${token}&per-page=1000`;

  try {
    const res = await fetch(url);
    if (res.ok) {
      const feed = await res.json();
      return feed.children;
    }
  } catch (err) {
    console.error(err);
    return [];
  }
};
