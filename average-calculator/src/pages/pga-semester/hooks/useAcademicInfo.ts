import { useEffect, useState } from "react";
import { usePageControl } from "@ellucian/experience-extension-utils";
import { AppLogger } from "../../../core/config/logger";
import { calculatorRepository } from "../../../core/repositories/repository-factory";
import { APIError } from "../../../core/common/errors";
import { AcademicInfo } from "../../../core/entities/academic-info";
import { usePageFatalError } from "../../../hooks/usePageFatalError";

const myLogger = AppLogger.getAppLogger().createContextLogger("academic-info-hook");

export function useAcademicInfo() {
  const [academicInfo, setAcademicInfo] = useState<AcademicInfo>({
    currentPGA: 0,
    creditsSoFar: 1,
    currentCredits: 1,
  });

  const { setLoadingStatus } = usePageControl();
  const { setFatalError } = usePageFatalError();

  const loadAcademicInfo = async () => {
    myLogger.debug("fetching academic info");
    setLoadingStatus(true);
    try {
      const currentAcademicInfo = await calculatorRepository.getAcademicInfo();
      myLogger.debug("academic info fetched", { currentAcademicInfo });
      setAcademicInfo(currentAcademicInfo);
    } catch (error) {
      if (error instanceof APIError) {
        setFatalError({ error });
      }
    } finally {
      setLoadingStatus(false);
    }
  };

  useEffect(() => {
    myLogger.debug("loading academic info");
    loadAcademicInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    academicInfo,
  };
}