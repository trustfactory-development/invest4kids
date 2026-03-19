"use client";

import { useState, useCallback } from "react";
import NoUiSlider from "@/components/NoUiSlider";
import VorteilsrechnerTimeline from "@/components/sections/VorteilsrechnerTimeline";
import {
  calculateTimeline,
  type CalculatorParams,
  type TimelineBlock,
} from "@/lib/invest4kidsApi";

function formatCurrency(value: number): string {
  return value.toLocaleString("de-DE", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
}

function calculateInvestment(
  age: number,
  monthly: number,
  lumpSum: number,
  annualReturn: number
) {
  const years = 18 - age;
  if (years <= 0)
    return { total: lumpSum, invested: lumpSum, gain: 0, years: 0 };

  const months = years * 12;
  const monthlyRate = annualReturn / 100 / 12;

  let total = lumpSum * Math.pow(1 + monthlyRate, months);
  if (monthlyRate > 0) {
    total +=
      monthly * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate);
  } else {
    total += monthly * months;
  }

  const invested = lumpSum + monthly * months;
  const gain = total - invested;

  return {
    total: Math.round(total),
    invested: Math.round(invested),
    gain: Math.round(gain),
    years,
  };
}

interface VorteilsrechnerCalculatorProps {
  showExFields?: boolean;
}

export default function VorteilsrechnerCalculator({
  showExFields = false,
}: VorteilsrechnerCalculatorProps) {
  // Form state (matching original Vue defaults)
  const [childName, setChildName] = useState("");
  const [childAge, setChildAge] = useState(0);
  const [investmentAmount, setInvestmentAmount] = useState(259);
  const [einmalzahlung, setEinmalzahlung] = useState(3500);
  const [rendite, setRendite] = useState(6);
  const [fuehrerschein, setFuehrerschein] = useState(true);
  const [studium, setStudium] = useState(true);
  const [immobilie, setImmobilie] = useState(true);
  const [hochzeit, setHochzeit] = useState(false);
  const [geldgeschenke, setGeldgeschenke] = useState(true);
  const [wenigerSparen, setWenigerSparen] = useState(true);
  const [advancedSettings, setAdvancedSettings] = useState(false);

  // Result / API state
  const [showResult, setShowResult] = useState(false);
  const [apiBlocks, setApiBlocks] = useState<TimelineBlock[] | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  // Validation handlers (clamp on blur)
  const validateAge = useCallback(() => {
    setChildAge((v) => {
      if (isNaN(v)) return 0;
      return Math.max(0, Math.min(17, v));
    });
  }, []);

  const validateInvestment = useCallback(() => {
    setInvestmentAmount((v) => {
      if (isNaN(v)) return 25;
      return Math.max(25, Math.min(500, v));
    });
  }, []);

  const validateEinmalzahlung = useCallback(() => {
    setEinmalzahlung((v) => {
      if (isNaN(v)) return 0;
      return Math.max(0, Math.min(50000, v));
    });
  }, []);

  const validateRendite = useCallback(() => {
    setRendite((v) => {
      if (isNaN(v)) return 0;
      return Math.max(0, Math.min(100, v));
    });
  }, []);

  // Result button handler — calls backend API
  const handleResultClick = useCallback(async () => {
    setShowResult(true);
    setIsCalculating(true);

    const params: CalculatorParams = {
      childAge,
      investmentAmount,
      einmalzahlung,
      childName,
      rendite,
      fuehrerschein,
      studium,
      immobilie,
      hochzeit,
      geldgeschenke,
      wenigerSparen,
    };

    try {
      const result = await calculateTimeline(params);
      setApiBlocks(result.blocks);
    } catch (error) {
      console.error("Calculation error:", error);
      setApiBlocks(null);
    } finally {
      setIsCalculating(false);
    }

    // Scroll to result button area
    const target = document.getElementById("result-button");
    if (target) {
      const targetPosition =
        target.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: targetPosition, behavior: "smooth" });
    }
  }, [
    childAge,
    investmentAmount,
    einmalzahlung,
    childName,
    rendite,
    fuehrerschein,
    studium,
    immobilie,
    hochzeit,
    geldgeschenke,
    wenigerSparen,
  ]);

  const result = calculateInvestment(
    childAge,
    investmentAmount,
    einmalzahlung,
    rendite
  );

  return (
    <section
      className="bg-[rgba(220,231,239,0.5)] pb-10 md:pb-[100px] mt-10 px-15 md:px-0"
      id="vorteil_berechnen"
    >
      <div className="max-w-full mx-auto md:px-2.5 md:max-w-[700px] lg:max-w-[912px]">
        <div className="md:pt-[100px] md:pb-[34px] md:px-0 text-center">
          <h2 className="font-poppins font-bold text-[27px] md:text-[36px] lg:text-[34px] leading-[36px] md:leading-[40px] lg:leading-[125%] text-text-medium m-0">
            Dein individueller Weg mit Invest4Kids
          </h2>
          <p className="font-poppins font-medium text-lg md:text-[20px] leading-6 md:leading-none text-text-medium mt-4">
            Berechne jetzt, wie sich dein Investment für dein Kind über die Jahre
            entwickeln kann
          </p>
        </div>

        {/* Calculator Form */}
        <div className="flex flex-col items-center bg-white p-[34px] max-md:px-4 max-md:py-6 rounded-[20px] w-full box-border gap-[34px]">
          {/* Name (only when showExFields) */}
          {showExFields && (
            <div className="flex flex-col w-full gap-[26px]">
              <div className="flex flex-col items-start gap-4 w-full">
                <div className="flex flex-col gap-4 flex-1 min-w-0 items-start">
                  <h2 className="font-poppins font-medium text-[20px] max-md:text-lg text-text-medium m-0 p-0 leading-none">Name</h2>
                  <p className="font-outfit font-light text-lg max-md:text-base text-primary m-0 w-full leading-normal">Wie heißt dein Kind?</p>
                </div>
                <div className="w-full min-w-full bg-transparent p-2.5 rounded-[5px] border border-[#CDCDCD]">
                  <input
                    type="text"
                    className="vr-name-input border-none! h-auto w-full! bg-transparent text-left outline-0 p-0! font-outfit font-light text-lg max-md:text-base leading-normal text-text-muted"
                    placeholder="Name des Kindes"
                    value={childName}
                    onChange={(e) => setChildName(e.target.value)}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Age */}
          <div className="flex flex-col w-full gap-[26px]">
            <div className="flex items-end justify-between w-full">
              <div className="flex flex-col gap-4 flex-1 min-w-0 items-start">
                <h2 className="font-poppins font-medium text-[20px] max-md:text-lg text-text-medium m-0 p-0 leading-none">Alter</h2>
                <p className="font-outfit font-light text-lg max-md:text-base text-primary m-0 w-full leading-normal">
                  <span className="max-md:hidden">Wie alt ist dein Kind?</span>
                  <span className="hidden max-md:inline">Wie alt ist dein Kind?</span>
                </p>
              </div>
              <div className="inline-flex flex-col items-center justify-center bg-primary-light/30 rounded-[10px] p-2.5 shrink-0 w-[43px] min-w-[43px]">
                <input
                  type="number"
                  className="vr-input border-none! h-auto w-full! bg-transparent text-center outline-0 p-0! font-outfit font-light text-lg max-md:text-base text-primary leading-none"
                  value={childAge}
                  onChange={(e) => setChildAge(parseInt(e.target.value, 10) || 0)}
                  onBlur={validateAge}
                  min={0}
                  max={17}
                />
              </div>
            </div>
            <div className="flex items-center justify-center w-full">
              <div className="relative w-full">
                <NoUiSlider
                  min={0}
                  max={17}
                  step={1}
                  start={childAge}
                  onSlide={(val) => setChildAge(Math.round(val))}
                />
              </div>
            </div>
          </div>

          {/* Investment Amount */}
          <div className="flex flex-col w-full gap-[26px]">
            <div className="flex items-end justify-between w-full">
              <div className="flex flex-col gap-4 flex-1 min-w-0 items-start">
                <h2 className="font-poppins font-medium text-[20px] max-md:text-lg text-text-medium m-0 p-0 leading-none">Investitionsbetrag</h2>
                <p className="font-outfit font-light text-lg max-md:text-base text-primary m-0 w-full leading-normal">
                  <span className="max-md:hidden">
                    Wie viel möchtest du jeden Monat investieren?
                  </span>
                  <span className="hidden max-md:inline">
                    Wie viel möchtest
                    <br />
                    du jeden Monat investieren?
                  </span>
                </p>
              </div>
              <div className="inline-flex flex-row items-center justify-center bg-primary-light/30 rounded-[10px] p-2.5 shrink-0 w-[85px] min-w-[85px] gap-1">
                <span className="inline-block font-outfit font-light text-lg max-md:text-base text-primary leading-none mr-1">€</span>
                <input
                  type="number"
                  className="vr-input border-none! h-auto w-full! bg-transparent text-center outline-0 p-0! font-outfit font-light text-lg max-md:text-base text-primary leading-none"
                  value={investmentAmount}
                  onChange={(e) =>
                    setInvestmentAmount(parseInt(e.target.value, 10) || 0)
                  }
                  onBlur={validateInvestment}
                  min={25}
                  max={500}
                />
              </div>
            </div>
            <div className="flex items-center justify-center w-full">
              <div className="relative w-full">
                <NoUiSlider
                  min={25}
                  max={500}
                  step={5}
                  start={investmentAmount}
                  onSlide={(val) => setInvestmentAmount(Math.round(val))}
                />
              </div>
            </div>
          </div>

          {/* Einmalzahlung */}
          <div className="flex flex-col w-full gap-[26px]">
            <div className="flex items-end justify-between w-full">
              <div className="flex flex-col gap-4 flex-1 min-w-0 items-start">
                <h2 className="font-poppins font-medium text-[20px] max-md:text-lg text-text-medium m-0 p-0 leading-none">Einmalzahlung</h2>
                <p className="font-outfit font-light text-lg max-md:text-base text-primary m-0 w-full leading-normal">
                  <span className="max-md:hidden">
                    Du kannst zu Beginn auch eine zusätzliche Einmalzahlung
                    leisten, wenn du möchtest
                  </span>
                  <span className="hidden max-md:inline">
                    Du kannst zu Beginn auch eine
                    <br />
                    zusätzliche Einmalzahlung leisten,
                    <br />
                    wenn du möchtest
                  </span>
                </p>
              </div>
              <div className="inline-flex flex-row items-center justify-center bg-primary-light/30 rounded-[10px] p-2.5 shrink-0 w-[100px] min-w-[100px] gap-1">
                <span className="inline-block font-outfit font-light text-lg max-md:text-base text-primary leading-none mr-1">€</span>
                <input
                  type="number"
                  className="vr-input border-none! h-auto w-full! bg-transparent text-center outline-0 p-0! font-outfit font-light text-lg max-md:text-base text-primary leading-none"
                  value={einmalzahlung}
                  onChange={(e) =>
                    setEinmalzahlung(parseInt(e.target.value, 10) || 0)
                  }
                  onBlur={validateEinmalzahlung}
                  min={0}
                  max={50000}
                />
              </div>
            </div>
            <div className="flex items-center justify-center w-full">
              <div className="relative w-full">
                <NoUiSlider
                  min={0}
                  max={50000}
                  step={500}
                  start={einmalzahlung}
                  onSlide={(val) => setEinmalzahlung(Math.round(val))}
                />
              </div>
            </div>
          </div>

          {/* Advanced Options Toggle */}
          {showExFields && (
            <div className="flex flex-col w-full gap-0">
              <div className="flex items-center gap-2.5 m-0">
                <label className="slider-switch">
                  <input
                    type="checkbox"
                    checked={advancedSettings}
                    onChange={(e) => setAdvancedSettings(e.target.checked)}
                  />
                  <span className="slider-switch-slider" />
                </label>
                <span className="font-outfit font-light text-lg text-primary">Erweiterte Optionen</span>
              </div>
            </div>
          )}

          {/* Rendite (advanced) */}
          {showExFields && advancedSettings && (
            <div className="flex flex-col w-full gap-[26px]">
              <div className="flex items-end justify-between w-full">
                <div className="flex flex-col gap-4 flex-1 min-w-0 items-start">
                  <h2 className="font-poppins font-medium text-[20px] max-md:text-lg text-text-medium m-0 p-0 leading-none">Rendite</h2>
                  <p className="font-outfit font-light text-lg max-md:text-base text-primary m-0 w-full leading-normal">
                    <span className="max-md:hidden">Erwartete Rendite (%)</span>
                    <span className="hidden max-md:inline">Erwartete Rendite (%)</span>
                  </p>
                </div>
                <div className="inline-flex flex-row items-center justify-center bg-primary-light/30 rounded-[10px] p-2.5 shrink-0 w-[85px] min-w-[85px] gap-1">
                  <span className="inline-block font-outfit font-light text-lg max-md:text-base text-primary leading-none mr-1">%</span>
                  <input
                    type="number"
                    className="vr-input border-none! h-auto w-full! bg-transparent text-center outline-0 p-0! font-outfit font-light text-lg max-md:text-base text-primary leading-none"
                    value={rendite}
                    onChange={(e) =>
                      setRendite(parseInt(e.target.value, 10) || 0)
                    }
                    onBlur={validateRendite}
                    min={0}
                    max={100}
                  />
                </div>
              </div>
              <div className="flex items-center justify-center w-full">
                <div className="relative w-full">
                  <NoUiSlider
                    min={0}
                    max={100}
                    step={1}
                    start={rendite}
                    onSlide={(val) => setRendite(Math.round(val))}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Sparziele (advanced) */}
          {showExFields && advancedSettings && (
            <div className="flex flex-col w-full gap-0">
              <div className="flex flex-col gap-4 flex-1 min-w-0 items-start">
                <h2 className="font-poppins font-medium text-[20px] max-md:text-lg text-text-medium m-0 p-0 leading-none">Sparziele</h2>
                <p className="font-outfit font-light text-lg max-md:text-base text-primary m-0 w-full leading-normal">Wähle deine Ziele</p>
              </div>
              <div className="flex flex-col items-start gap-2">
                <label className="flex items-center gap-[15px] my-5 cursor-pointer font-outfit font-light text-lg text-primary">
                  <input
                    type="checkbox"
                    checked={fuehrerschein}
                    onChange={(e) => setFuehrerschein(e.target.checked)}
                  />
                  Führerschein
                </label>
                <label className="flex items-center gap-[15px] my-5 cursor-pointer font-outfit font-light text-lg text-primary">
                  <input
                    type="checkbox"
                    checked={studium}
                    onChange={(e) => setStudium(e.target.checked)}
                  />
                  Studium
                </label>
                <label className="flex items-center gap-[15px] my-5 cursor-pointer font-outfit font-light text-lg text-primary">
                  <input
                    type="checkbox"
                    checked={immobilie}
                    onChange={(e) => setImmobilie(e.target.checked)}
                  />
                  Immobilie
                </label>
                <label className="hidden">
                  <input
                    type="checkbox"
                    checked={hochzeit}
                    onChange={(e) => setHochzeit(e.target.checked)}
                  />
                  Hochzeit
                </label>
              </div>
            </div>
          )}

          {/* Sonderzahlungen (advanced) */}
          {showExFields && advancedSettings && (
            <div className="flex flex-col w-full gap-0">
              <div className="flex flex-col gap-4 flex-1 min-w-0 items-start">
                <h2 className="font-poppins font-medium text-[20px] max-md:text-lg text-text-medium m-0 p-0 leading-none">Sonderzahlungen</h2>
                <p className="font-outfit font-light text-lg max-md:text-base text-primary m-0 w-full leading-normal">z. B. 5.000€ von den Großeltern</p>
              </div>
              <div className="flex flex-col items-start gap-2">
                <label className="flex items-center gap-[15px] my-5 cursor-pointer font-outfit font-light text-lg text-primary">
                  <input
                    type="checkbox"
                    checked={geldgeschenke}
                    onChange={(e) => setGeldgeschenke(e.target.checked)}
                  />
                  Berücksichtigen
                </label>
              </div>
            </div>
          )}

          {/* Flexibility (advanced) */}
          {showExFields && advancedSettings && (
            <div className="flex flex-col w-full gap-0">
              <div className="flex flex-col gap-4 flex-1 min-w-0 items-start">
                <h2 className="font-poppins font-medium text-[20px] max-md:text-lg text-text-medium m-0 p-0 leading-none">Ist dir Flexibilität wichtig?</h2>
                <p className="font-outfit font-light text-lg max-md:text-base text-primary m-0 w-full leading-normal">monatlichen Beitrag reduzieren</p>
              </div>
              <div className="flex flex-col items-start gap-2">
                <label className="flex items-center gap-[15px] my-5 cursor-pointer font-outfit font-light text-lg text-primary">
                  <input
                    type="checkbox"
                    checked={wenigerSparen}
                    onChange={(e) => setWenigerSparen(e.target.checked)}
                  />
                  Berücksichtigen
                </label>
              </div>
            </div>
          )}

          {/* Result Button */}
          <div className="flex justify-center w-full">
            <button
              id="result-button"
              className="bg-primary text-white border-none rounded-full py-3.5 px-9 max-md:px-6 max-md:w-full font-outfit font-medium text-lg max-md:text-base leading-normal cursor-pointer flex items-center justify-center gap-1 whitespace-nowrap"
              onClick={handleResultClick}
              type="button"
            >
              Ergebnis anzeigen{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                className="text-[14px]"
              >
                <path
                  d="M1 7H13M13 7L7 1M13 7L7 13"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Timeline */}
        <VorteilsrechnerTimeline
          blocks={apiBlocks}
          isLoading={isCalculating}
        />

        {/* CTA Section */}
        <div
          className="mx-0 my-[45px] md:my-[100px] p-6 md:p-[34px] border border-accent rounded-[20px] text-center flex flex-col items-center"
          style={{
            background:
              "linear-gradient(103deg, #F2FAFA -2.06%, #FFFAEE 100%)",
          }}
        >
          <h2 className="font-poppins font-bold text-[22px] md:text-[28px] leading-[125%] text-text-medium m-0">
            Lass dir unverbindlich zeigen, welche Optionen du wirklich hast –
            mit einem Konzept, das zu dir und deinem Kind passt.
          </h2>
          <a
            href="https://www.invest4kids-beratung.de/start"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 bg-white text-text-medium font-outfit font-medium text-base md:text-lg leading-none border border-primary rounded-full py-[15px] px-9 no-underline transition-all duration-300 mt-12 hover:bg-primary hover:text-white w-full md:w-auto justify-center md:justify-start"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
            >
              <path
                d="M15.9882 1.28748C15.9692 0.955935 15.8367 0.643222 15.6156 0.408348C15.3946 0.173474 15.1002 0.0326808 14.7881 0.0125323C13.7817 -0.0512153 11.2095 0.046531 9.07497 2.3134L8.69495 2.72223H4.02826C3.85951 2.72122 3.69226 2.75587 3.53623 2.82416C3.3802 2.89245 3.23851 2.99302 3.1194 3.12002L0.375235 6.03711C0.206943 6.21578 0.0888507 6.44074 0.0342124 6.68675C-0.0204259 6.93276 -0.00944832 7.19008 0.0659132 7.42983C0.141275 7.66958 0.278038 7.88227 0.460854 8.04404C0.643669 8.2058 0.865302 8.31024 1.10088 8.34562L4.17867 8.80205L7.71569 12.5598L8.14532 15.8313C8.17835 16.0816 8.27663 16.3171 8.42904 16.5111C8.58145 16.7052 8.78191 16.8501 9.00777 16.9294C9.13932 16.9761 9.2771 17 9.4158 17C9.58374 17.0003 9.75008 16.9654 9.90524 16.8971C10.0604 16.8288 10.2013 16.7286 10.3199 16.6022L13.0656 13.6868C13.1852 13.5603 13.2798 13.4097 13.3441 13.244C13.4084 13.0782 13.441 12.9005 13.44 12.7213V7.76339L13.8217 7.35796C15.9562 5.09024 16.0482 2.35759 15.9882 1.28748Z"
                className="fill-text-medium group-hover:fill-white transition-colors duration-300"
              />
            </svg>
            Jetzt kostenlose Beratung buchen
          </a>
        </div>
      </div>
    </section>
  );
}
