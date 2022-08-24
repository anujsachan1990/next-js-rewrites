export const config = {
  runtime: 'experimental-edge',
}

export default async function handler(req) {


  console.log('proxy is here');
  
  const x = fetch("https://www.countryroad.com.au/", {
    "headers": {
      "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
      "accept-language": "en-GB,en;q=0.9,en-US;q=0.8,nb;q=0.7,hi;q=0.6,fr;q=0.5,pl;q=0.4,sv;q=0.3,la;q=0.2",
      "cache-control": "max-age=0",
      "if-none-match": "\"96229938\"",
      "sec-ch-ua": "\"Chromium\";v=\"104\", \" Not A;Brand\";v=\"99\", \"Google Chrome\";v=\"104\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"macOS\"",
      "sec-fetch-dest": "document",
      "sec-fetch-mode": "navigate",
      "sec-fetch-site": "none",
      "sec-fetch-user": "?1",
      "upgrade-insecure-requests": "1",
      "cookie": "visid_incap_2179657=DVYrsF4JQxeeLLzXPbdM+BrmAmMAAAAAQUIPAAAAAACwg979bYrS+qaJglYEFk4G; ASP.NET_SessionId=pz5tfen022qby2qyzb0uciiy; loggedIn=False; countryCode=AU; nlbi_2179657=234BM0gzgDxs8eZGi5kzWAAAAAANPGxjaZvjWp/5Mp33K1dy; optimizelyEndUserId=oeu1661134366040r0.17637849092616786; crl8.fpcuid=a4fcfb90-0658-446b-926c-fc82af67b4e1; DOMAINCHECK=true; _gcl_au=1.1.1188624950.1661134370; cartAbandon=0; _fbp=fb.2.1661134370429.1758391855; popup_member_acquisition=true; _pin_unauth=dWlkPU5XSXlaREJpWWprdE9EbGhaUzAwTjJNMExUaGxabVF0TUdSbVkyRmtObVZoWXpJNQ; BVBRANDID=13775bd1-4ce9-4ab4-a0a4-3d0f578f8d37; _hjSessionUser_246269=eyJpZCI6ImViMDU0MzliLWRmNGEtNTIxMC1iMTc3LWZkMzVhMjcxYjZlZCIsImNyZWF0ZWQiOjE2NjExMzQzNzA5ODgsImV4aXN0aW5nIjp0cnVlfQ==; iSAMSShopper=b6wZEfYgBkFbDsUbQ+AV+5zCxr6Q4j2YCdxSNWUDWXQJlpzKjz1h1dN7sJ9j9LEBBRwxpHoWrCwMZZfjQQmOZQ==; _gcl_aw=GCL.1661137762.Cj0KCQjwr4eYBhDrARIsANPywCjM6K_6Bnl6Td4iSOIcILxiI2cy79-puN2YUHtJhmJ1BugeNtOSf8oaAkB3EALw_wcB; _gcl_dc=GCL.1661137762.Cj0KCQjwr4eYBhDrARIsANPywCjM6K_6Bnl6Td4iSOIcILxiI2cy79-puN2YUHtJhmJ1BugeNtOSf8oaAkB3EALw_wcB; _gac_UA-3785867-7=1.1661137768.Cj0KCQjwr4eYBhDrARIsANPywCjM6K_6Bnl6Td4iSOIcILxiI2cy79-puN2YUHtJhmJ1BugeNtOSf8oaAkB3EALw_wcB; _derived_epik=dj0yJnU9RmRGLVk5SlR6VkxxamZZeVNTdFU0UlNKNHdGLUk4ekMmbj1teG5xOUdwbG5pdHd4NEw2S1ZmNWVBJm09MSZ0PUFBQUFBR01DOUZNJnJtPTEmcnQ9QUFBQUFHTUM5Rk0; _ga=GA1.1.1499413728.1661134371; visid_incap_1888593=rr4Cul9PRYKPyck7efVvip1DA2MAAAAAQUIPAAAAAAC7MbnG9INssQwlLHnBbxWx; incap_ses_605_1888593=vQWGbm8sgCJui7QCCGVlCJ5DA2MAAAAA7Mclieh5Tr2AYm6/PrXxSg==; _ga_JLZ4PJJZQE=GS1.1.1661158305.1.1.1661158356.9.0.0; incap_ses_605_2179657=/nmwEHImUl6MLLoCCGVlCNZlA2MAAAAAENJqtJ8XNTLsMcd4U6brcQ==; incap_ses_1469_1888593=8ORxPI9AhFggfa9iBPBiFG0tBGMAAAAAwMY4BuBjrTAF3UdXBeHeXQ==; BVImplmain_site=14795; visid_incap_2179658=jfpfaixtQwu5DlOrw99AO1JvBGMAAAAAQUIPAAAAAAARtwKFrj2A4ew4EJtO8maM; incap_ses_1469_2179658=vACaa8ouzDQmI9BiBPBiFFNvBGMAAAAA7FWY8hS8SdhjKL6hhDhmFQ==; cartCount=1; _clck=1sb7ao|1|f4a|0; incap_ses_1469_2179657=abAdCy16AAp2kAyxBvBiFMvPBWMAAAAAlmBP8dMxQOvTKfQpBmBQaw==; reese84=3:5iN79YHwO9oRzwTBbx8rmg==:VC2Lhj2+TeUc1OHRvpiuLwqYvNWofwPLrjJCAqy/EJUziLMZWXn8muaEeyF0qBczpOVeSfZJUbPg2G3ZySqyHXFjDV9rniZEnl87vUOt02m01+V3b+/ha783BL2ATeLDMPu87AmBMoV59JHr4ZBSaq2tAfLkDqR7K0WkW/1NKd827OLp/fQaLM70XJ1YO+0Nnkh2Ijus1stzfJv8STr7KoFR7TPo1uzvLHFLXYl31sviI8UL0WLQ2mSL/25/PaJgiJwSqApUHA4/e3LwN4ljxs1KZXEWs1Vo+Po01fV1CJ6jV3yk/xDUv5Nh37KvEkdnhfye/a4UwmbcQ/cJIC7YQHaP3NifZV2D1bYC4655jghH7TItlUC5vtyIEavjxpT2da8CpvzfdFnbCtpv73TcxRHUcT3bPlxoMb5TjuEaT2ezqqap+qyRQDXo6duH4f+N:HKS8Orl8UsS9iaO1oBQgL7XZZsldXGfQtErVN+VcHLw=; nlbi_2179657_2147483392=zgcCLfTAB2sFw1VAi5kzWAAAAACja1Cs7q+u2B0IW2Zsxent; iSAMS=SysTkLCK+Qr2TLRWn/FMOrSnUeppyudHTQp7fGccZ6RHaeuPvsy79iSCDjRI+wEs0Xj0oJeTu5WWYk3B2f12fg==; _ga_75XNW30K9J=GS1.1.1661326967.17.1.1661327804.60.0.0; _uetsid=eeb7c64021bf11ed8756c7bc9b43eefa; _uetvid=e3992240187f11eda2644d31069ced93; inside-au3=57840060-80f69e43e55a2f6a68d264f939b78dbc0891d3b3b133f19a3f575e92bb01331f-0-0; _clsk=srixx1|1661327806485|4|1|j.clarity.ms/collect"
    },
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": null,
    "method": "GET"
  });

  return x

}
