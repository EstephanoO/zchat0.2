import { BriefCase, ClockSvg, GeneticData, MouseRepo, NoteBookRepo, WrittingBoard } from "@/components/icons/icons/briefcase-svgrepo-com";

interface SvgsToNameProps {
    name: SvgNames;
    width: string;
    className?: string;
    height: string;
}

interface SvgToName {
    svg: () => JSX.Element;
    name: 'BriefCase' | 'ClockSvg' | 'NoteSvg' | 'WrittingBoard' | 'MouseRepo' | 'GeneticData'
    id: number;
}
export type SvgNames = 'BriefCase' | 'ClockSvg' | 'NoteSvg' | 'WrittingBoard' | 'MouseRepo' | 'GeneticData'
export const SvgsToName = ({width, className, height,name}: SvgsToNameProps) => {
    const svgProps = {width, className, height}
    const data: SvgToName[] = [{ 
    svg : () => BriefCase(svgProps),
    name: 'BriefCase',
    id: 1,
    },
    {
    svg : () => ClockSvg(svgProps),
    name: 'ClockSvg',
    id: 2
    },
    {
        svg: () => NoteBookRepo(svgProps),
        name: 'NoteSvg',
        id: 3,
    },
    {
        svg: () => ClockSvg(svgProps),
        name: 'ClockSvg',
        id: 4
    },
    {
        svg: () => WrittingBoard(svgProps),
        name: 'WrittingBoard',
        id: 5
    },
    {
        svg: () => MouseRepo(svgProps),
        name: 'MouseRepo',
        id: 6
    },
    {
        svg: () => GeneticData(svgProps),
        name: 'GeneticData',
        id: 7
    }
    ]
   const filterByName = data.filter((item) => item.name === name) 
   return filterByName[0].svg()
    }
