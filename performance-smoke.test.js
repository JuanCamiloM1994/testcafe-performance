import { getPerformanceMetrics } from "@platform-os/testcafe-helpers";

fixture("Get perf metrics").page("https://www.demoblaze.com")

test("smoke perf test", async (t) => {
    const perf = await getPerformanceMetrics({ t })
    console.log(perf)
    const computed = perf.computed

    const ttfb = computed.ttfb // from navigation started till resoponseEnd
    const domReady = computed.domReady // from naviogationStarted till domcomplete
    const latency = computed.latency // from fetchStart till respmseEnd 

    await t.expect(ttfb).lt(1000)
    await t.expect(domReady).lt(2000)
    await t.expect(latency).lt(200)
})