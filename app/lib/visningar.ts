// Visningar som visas på startsidan och under /visningar.
// Lägg till en ny visning genom att kopiera ett objekt och byta ut texten och länken.
// Den första i listan visas stort på startsidan.

export type Visning = {
  titel: string
  beskrivning: string
  matterport: string
}

export const visningar: Visning[] = [
  {
    titel: "Virtuell visning",
    beskrivning: "Gå runt i bostaden, öppna dockhusvyn och mät rummen – direkt i webbläsaren.",
    matterport: "https://my.matterport.com/show/?m=zfV2SFbogEs",
  },
]
