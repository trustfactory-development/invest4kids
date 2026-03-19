export interface CalculatorParams {
  childAge: number;
  investmentAmount: number;
  einmalzahlung: number;
  childName: string;
  rendite: number;
  fuehrerschein: boolean;
  studium: boolean;
  immobilie: boolean;
  hochzeit: boolean;
  geldgeschenke: boolean;
  wenigerSparen: boolean;
  locale?: string;
}

export interface TimelinePill {
  imgSrc: string;
  text: string;
}

export interface TimelineBlock {
  age: number;
  imageSrc?: string;
  pills: TimelinePill[] | TimelinePill[][];
  age_text?: string;
  capital_as_text?: string;
  texts: string[];
  tipp?: string;
  show_birne?: boolean;
  mobile_pills_start_position?: string;
}

export interface CalculationResult {
  blocks: TimelineBlock[];
}

const BACKEND_URL =
  "https://smartrechner-api-czgedghnf4fugydh.germanywestcentral-01.azurewebsites.net";

export async function calculateTimeline(
  params: CalculatorParams
): Promise<CalculationResult> {
  const response = await fetch(`${BACKEND_URL}/calculate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...params,
      locale: params.locale ?? "de",
    }),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}

export function formatNumber(num: number, withCurrency = false): string {
  const rounded = Math.round(num);
  const formatted = rounded.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return withCurrency ? `${formatted}\u20AC` : formatted;
}
