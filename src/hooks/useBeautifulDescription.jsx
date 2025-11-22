
import { useMemo} from 'react';



export const useBeautifulDescription = (rawDescription) => {
  return useMemo(() => {
    if (!rawDescription) return { short: '', full: '' };

    const fullHtml = rawDescription
      .replace(/^(.*?)\n/, '<strong>$1</strong>\n') // Bold first line
      .replace(/\n\n/g, '<p class="mt-4"></p>')
      .replace(/\n/g, '<br/>')
      .replace(
        /(https?:\/\/[^\s<]+[^\s<.,;:!?])/g,
        '<a href="$1" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:underline break-all">$1</a>'
      )
      .replace(
        /\b(\d+:)?\d+:\d+\b/g,
        (match) => <span class="timestamp text-blue-400 hover:underline cursor-pointer font-medium" data-time="${match}">${match}</span>
      )
      .replace(/#(\w+)/g, '<a href="https://www.youtube.com/hashtag/$1" target="_blank" class="text-blue-400 hover:text-blue-300">#$1</a>')
      .replace(/@(\w+)/g, '<a href="https://www.youtube.com/@$1" target="_blank" class="text-purple-400 hover:text-purple-300">@$1</a>');

    // Create short version: first 2-3 lines or ~200-300 characters
    const lines = rawDescription.split('\n').slice(0, 4).join('\n');
    const shortText = lines.length < rawDescription.length ? lines + `<button>more</button>` : rawDescription;

    const shortHtml = shortText
      .replace(/^(.*?)\n/, '<strong>$1</strong>\n')
      .replace(/\n/g, '<br/>')
      .replace(/(https?:\/\/[^\s<]+[^\s<.,;:!?])/g, '<a href="$1" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:underline">$1</a>')
      .replace(/\b(\d+:)?\d+:\d+\b/g, (match) => <span class="timestamp text-blue-400 hover:underline cursor-pointer" data-time="${match}">${match}</span>)
      .replace(/#(\w+)/g, '<a href="https://www.youtube.com/hashtag/$1" target="_blank" class="text-blue-400">#$1</a>')
      .replace(/@(\w+)/g, '<a href="https://www.youtube.com/@$1" target="_blank" class="text-purple-400">@$1</a>');

    return { short: shortHtml, full: fullHtml };
  }, [rawDescription]);
};



