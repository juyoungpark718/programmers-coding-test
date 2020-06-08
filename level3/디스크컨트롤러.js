function solution(jobs) {
  let len = jobs.length;
  jobs = re(jobs);
  jobs.sort((a, b) => {
    if (a.req > b.req) {
      return 1;
    } else if (a.req < b.req) {
      return -1;
    } else {
      return a.end - b.end;
    }
  });
  let first = jobs.shift();
  let excuteTime = first.req + first.end;
  let answer = first.end;

  while (jobs.length !== 0) {
    let nextJob = 0;
    for (let i = 1; i < jobs.length; i++) {
      if (jobs[i].req > excuteTime) break;
      else {
        if (jobs[i].end < jobs[nextJob].end) {
          nextJob = i;
        }
      }
    }
    let job = jobs.splice(nextJob, 1)[0];
    if (job.req > excuteTime) {
      answer += job.end;
      excuteTime = job.end + job.req;
    } else {
      answer += excuteTime - job.req + job.end;
      excuteTime = excuteTime + job.end;
    }
  }

  return Math.floor(answer / len);
}

function re(jobs) {
  return jobs.map((e, id) => {
    return { id, req: e[0], end: e[1] };
  });
}
