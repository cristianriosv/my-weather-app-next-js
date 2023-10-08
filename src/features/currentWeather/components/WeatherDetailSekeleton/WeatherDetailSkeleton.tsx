const WeatherDetailSkeleton = () => (
    <div className="p-10 w-full mx-auto opacity-50">
        <div className="animate-pulse2 flex space-x-4">
            <div className="flex-1 space-y-6 py-1">
                <div className="h-2 bg-slate-700 rounded"></div>
                <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                    <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                    <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                    <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                    <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                </div>
                <div className="h-2 bg-slate-700 rounded"></div>
                </div>
            </div>
            <div className="rounded-full bg-slate-700 h-20 w-20"></div>
        </div>
    </div>
);

export default WeatherDetailSkeleton;