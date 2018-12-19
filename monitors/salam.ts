import { KlasaClient, KlasaMessage, Monitor, MonitorStore } from './../imports';

const salamTerms = [
  'salam',
  'asalamoalaikum wa rahmatullahi wa barakatuhu',
  'asalamoalaikum',
];

const greetingTerms = [
  'hi',
  'hello',
  'morning',
  'good morning',
  'good day',
  'good afternoon',
  'good evening',
  'good night',
  'goodnight',
  'gn',
];

module.exports = class extends Monitor {
  constructor(
    client: KlasaClient,
    store: MonitorStore,
    file: string[],
    directory: string
  ) {
    super(client, store, file, directory, {
      ignoreEdits: false,
      ignoreOthers: false,
    });
  }

  async run(message: KlasaMessage) {
    // If this is not a in a guild cancel out
    if (!message.guild || !message.content.length) return null;
    // if the message starts with a salam term reply
    for (const term of salamTerms)
      if (message.content.startsWith(term))
        return message.reply('Walaikumasalam Wa Rahmatullahi Wa Barakatuhu');
    // if the message starts with non-salam greeting reply
    for (const term of greetingTerms)
      if (message.content.startsWith(term))
        return message.reply('Asalamoalaikum Wa Rahmatullahi Wa Barakatuhu');
    // Cancel out
    return null;
  }
};