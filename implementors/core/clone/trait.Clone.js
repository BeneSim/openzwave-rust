(function() {var implementors = {};
implementors["libc"] = ["impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.stat.html' title='libc::stat'>stat</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.stat64.html' title='libc::stat64'>stat64</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.pthread_attr_t.html' title='libc::pthread_attr_t'>pthread_attr_t</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.mcontext_t.html' title='libc::mcontext_t'>mcontext_t</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.ucontext_t.html' title='libc::ucontext_t'>ucontext_t</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.sigset_t.html' title='libc::sigset_t'>sigset_t</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.sigaction.html' title='libc::sigaction'>sigaction</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.stack_t.html' title='libc::stack_t'>stack_t</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.siginfo_t.html' title='libc::siginfo_t'>siginfo_t</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.glob64_t.html' title='libc::glob64_t'>glob64_t</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.ucred.html' title='libc::ucred'>ucred</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.statfs.html' title='libc::statfs'>statfs</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.msghdr.html' title='libc::msghdr'>msghdr</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.termios.html' title='libc::termios'>termios</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.flock.html' title='libc::flock'>flock</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.ipc_perm.html' title='libc::ipc_perm'>ipc_perm</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.shmid_ds.html' title='libc::shmid_ds'>shmid_ds</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.dirent.html' title='libc::dirent'>dirent</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.dirent64.html' title='libc::dirent64'>dirent64</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.rlimit64.html' title='libc::rlimit64'>rlimit64</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.glob_t.html' title='libc::glob_t'>glob_t</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.ifaddrs.html' title='libc::ifaddrs'>ifaddrs</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.pthread_mutex_t.html' title='libc::pthread_mutex_t'>pthread_mutex_t</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.pthread_rwlock_t.html' title='libc::pthread_rwlock_t'>pthread_rwlock_t</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.pthread_mutexattr_t.html' title='libc::pthread_mutexattr_t'>pthread_mutexattr_t</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.pthread_cond_t.html' title='libc::pthread_cond_t'>pthread_cond_t</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.passwd.html' title='libc::passwd'>passwd</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.statvfs.html' title='libc::statvfs'>statvfs</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.dqblk.html' title='libc::dqblk'>dqblk</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.signalfd_siginfo.html' title='libc::signalfd_siginfo'>signalfd_siginfo</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.fsid_t.html' title='libc::fsid_t'>fsid_t</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.mq_attr.html' title='libc::mq_attr'>mq_attr</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.cpu_set_t.html' title='libc::cpu_set_t'>cpu_set_t</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.sockaddr.html' title='libc::sockaddr'>sockaddr</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.sockaddr_in.html' title='libc::sockaddr_in'>sockaddr_in</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.sockaddr_in6.html' title='libc::sockaddr_in6'>sockaddr_in6</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.sockaddr_un.html' title='libc::sockaddr_un'>sockaddr_un</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.sockaddr_storage.html' title='libc::sockaddr_storage'>sockaddr_storage</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.addrinfo.html' title='libc::addrinfo'>addrinfo</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.sockaddr_nl.html' title='libc::sockaddr_nl'>sockaddr_nl</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.sockaddr_ll.html' title='libc::sockaddr_ll'>sockaddr_ll</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.fd_set.html' title='libc::fd_set'>fd_set</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.tm.html' title='libc::tm'>tm</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.sched_param.html' title='libc::sched_param'>sched_param</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.Dl_info.html' title='libc::Dl_info'>Dl_info</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.epoll_event.html' title='libc::epoll_event'>epoll_event</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.utsname.html' title='libc::utsname'>utsname</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.lconv.html' title='libc::lconv'>lconv</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.utimbuf.html' title='libc::utimbuf'>utimbuf</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.timeval.html' title='libc::timeval'>timeval</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.timespec.html' title='libc::timespec'>timespec</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.rlimit.html' title='libc::rlimit'>rlimit</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.rusage.html' title='libc::rusage'>rusage</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.in_addr.html' title='libc::in_addr'>in_addr</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.in6_addr.html' title='libc::in6_addr'>in6_addr</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.ip_mreq.html' title='libc::ip_mreq'>ip_mreq</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.ipv6_mreq.html' title='libc::ipv6_mreq'>ipv6_mreq</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.hostent.html' title='libc::hostent'>hostent</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.iovec.html' title='libc::iovec'>iovec</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.pollfd.html' title='libc::pollfd'>pollfd</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.winsize.html' title='libc::winsize'>winsize</a>",];implementors["openzwave_sys"] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='enum' href='openzwave_sys/notification/enum.NotificationCode.html' title='openzwave_sys::notification::NotificationCode'>NotificationCode</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='enum' href='openzwave_sys/notification/enum.ControllerState.html' title='openzwave_sys::notification::ControllerState'>ControllerState</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='enum' href='openzwave_sys/notification/enum.ControllerError.html' title='openzwave_sys::notification::ControllerError'>ControllerError</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='enum' href='openzwave_sys/value_classes/value_id/enum.ValueGenre.html' title='openzwave_sys::value_classes::value_id::ValueGenre'>ValueGenre</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='enum' href='openzwave_sys/value_classes/value_id/enum.ValueType.html' title='openzwave_sys::value_classes::value_id::ValueType'>ValueType</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='openzwave_sys/value_classes/value_id/struct.ValueID.html' title='openzwave_sys::value_classes::value_id::ValueID'>ValueID</a>",];implementors["itertools"] = ["impl&lt;I:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a>,&nbsp;J:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='itertools/struct.Interleave.html' title='itertools::Interleave'>Interleave</a>&lt;I,&nbsp;J&gt;","impl&lt;I:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a>,&nbsp;J:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='itertools/struct.InterleaveShortest.html' title='itertools::InterleaveShortest'>InterleaveShortest</a>&lt;I,&nbsp;J&gt; <span class='where'>where I: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/iterator/trait.Iterator.html' title='core::iter::iterator::Iterator'>Iterator</a>, J: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/iterator/trait.Iterator.html' title='core::iter::iterator::Iterator'>Iterator</a>&lt;Item=I::Item&gt;</span>","impl&lt;I:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='itertools/struct.PutBack.html' title='itertools::PutBack'>PutBack</a>&lt;I&gt; <span class='where'>where I: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/iterator/trait.Iterator.html' title='core::iter::iterator::Iterator'>Iterator</a>, I::Item: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a></span>","impl&lt;I:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/iterator/trait.Iterator.html' title='core::iter::iterator::Iterator'>Iterator</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='itertools/struct.PutBackN.html' title='itertools::PutBackN'>PutBackN</a>&lt;I&gt; <span class='where'>where I: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a>, I::Item: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a></span>","impl&lt;I:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a>,&nbsp;J:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='itertools/struct.Product.html' title='itertools::Product'>Product</a>&lt;I,&nbsp;J&gt; <span class='where'>where I: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/iterator/trait.Iterator.html' title='core::iter::iterator::Iterator'>Iterator</a>, I::Item: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a></span>","impl&lt;I:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a>,&nbsp;F:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='itertools/struct.Batching.html' title='itertools::Batching'>Batching</a>&lt;I,&nbsp;F&gt;","impl&lt;K:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a>,&nbsp;I:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a>,&nbsp;F:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='itertools/struct.GroupBy.html' title='itertools::GroupBy'>GroupBy</a>&lt;K,&nbsp;I,&nbsp;F&gt; <span class='where'>where I: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/iterator/trait.Iterator.html' title='core::iter::iterator::Iterator'>Iterator</a>, I::Item: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a></span>","impl&lt;I:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='itertools/struct.Step.html' title='itertools::Step'>Step</a>&lt;I&gt;","impl&lt;I,&nbsp;J&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='itertools/struct.Merge.html' title='itertools::Merge'>Merge</a>&lt;I,&nbsp;J&gt; <span class='where'>where I: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/iterator/trait.Iterator.html' title='core::iter::iterator::Iterator'>Iterator</a>, J: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/iterator/trait.Iterator.html' title='core::iter::iterator::Iterator'>Iterator</a>&lt;Item=I::Item&gt;, <a class='struct' href='https://doc.rust-lang.org/nightly/core/iter/struct.Peekable.html' title='core::iter::Peekable'>Peekable</a>&lt;I&gt;: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a>, <a class='struct' href='https://doc.rust-lang.org/nightly/core/iter/struct.Peekable.html' title='core::iter::Peekable'>Peekable</a>&lt;J&gt;: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a></span>","impl&lt;I,&nbsp;J,&nbsp;F&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='itertools/struct.MergeBy.html' title='itertools::MergeBy'>MergeBy</a>&lt;I,&nbsp;J,&nbsp;F&gt; <span class='where'>where I: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/iterator/trait.Iterator.html' title='core::iter::iterator::Iterator'>Iterator</a>, J: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/iterator/trait.Iterator.html' title='core::iter::iterator::Iterator'>Iterator</a>&lt;Item=I::Item&gt;, <a class='struct' href='https://doc.rust-lang.org/nightly/core/iter/struct.Peekable.html' title='core::iter::Peekable'>Peekable</a>&lt;I&gt;: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a>, <a class='struct' href='https://doc.rust-lang.org/nightly/core/iter/struct.Peekable.html' title='core::iter::Peekable'>Peekable</a>&lt;J&gt;: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a>, F: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a></span>","impl&lt;I:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='itertools/struct.MultiPeek.html' title='itertools::MultiPeek'>MultiPeek</a>&lt;I&gt; <span class='where'>where I: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/iterator/trait.Iterator.html' title='core::iter::iterator::Iterator'>Iterator</a>, I::Item: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a></span>","impl&lt;I:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a>,&nbsp;F:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='itertools/struct.Coalesce.html' title='itertools::Coalesce'>Coalesce</a>&lt;I,&nbsp;F&gt; <span class='where'>where I: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/iterator/trait.Iterator.html' title='core::iter::iterator::Iterator'>Iterator</a>, I::Item: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a></span>","impl&lt;I:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='itertools/struct.Dedup.html' title='itertools::Dedup'>Dedup</a>&lt;I&gt; <span class='where'>where I: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/iterator/trait.Iterator.html' title='core::iter::iterator::Iterator'>Iterator</a>, I::Item: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a></span>","impl&lt;I:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='itertools/struct.MendSlices.html' title='itertools::MendSlices'>MendSlices</a>&lt;I&gt; <span class='where'>where I: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/iterator/trait.Iterator.html' title='core::iter::iterator::Iterator'>Iterator</a>, I::Item: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a></span>","impl&lt;I:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='itertools/struct.WhileSome.html' title='itertools::WhileSome'>WhileSome</a>&lt;I&gt;","impl&lt;I:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/iterator/trait.Iterator.html' title='core::iter::iterator::Iterator'>Iterator</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='itertools/struct.Combinations.html' title='itertools::Combinations'>Combinations</a>&lt;I&gt; <span class='where'>where I::Item: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a></span>","impl&lt;I:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/iterator/trait.Iterator.html' title='core::iter::iterator::Iterator'>Iterator</a>,&nbsp;V:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a>,&nbsp;F:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='itertools/struct.UniqueBy.html' title='itertools::UniqueBy'>UniqueBy</a>&lt;I,&nbsp;V,&nbsp;F&gt;","impl&lt;I:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/iterator/trait.Iterator.html' title='core::iter::iterator::Iterator'>Iterator</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='itertools/struct.Unique.html' title='itertools::Unique'>Unique</a>&lt;I&gt; <span class='where'>where I::Item: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a></span>","impl&lt;I&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='itertools/struct.Flatten.html' title='itertools::Flatten'>Flatten</a>&lt;I&gt; <span class='where'>where I: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/iterator/trait.Iterator.html' title='core::iter::iterator::Iterator'>Iterator</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a>, I::Item: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/traits/trait.IntoIterator.html' title='core::iter::traits::IntoIterator'>IntoIterator</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a>, I::Item::IntoIter: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a></span>","impl&lt;'a,&nbsp;I:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='itertools/struct.FormatDefault.html' title='itertools::FormatDefault'>FormatDefault</a>&lt;'a,&nbsp;I&gt;","impl&lt;I:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='itertools/struct.Intersperse.html' title='itertools::Intersperse'>Intersperse</a>&lt;I&gt; <span class='where'>where I: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/iterator/trait.Iterator.html' title='core::iter::iterator::Iterator'>Iterator</a>, I::Item: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a></span>","impl&lt;I:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='itertools/struct.ISlice.html' title='itertools::ISlice'>ISlice</a>&lt;I&gt;","impl&lt;I&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='itertools/struct.KMerge.html' title='itertools::KMerge'>KMerge</a>&lt;I&gt; <span class='where'>where I: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/iterator/trait.Iterator.html' title='core::iter::iterator::Iterator'>Iterator</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a>, I::Item: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a></span>","impl&lt;F:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='itertools/struct.Linspace.html' title='itertools::Linspace'>Linspace</a>&lt;F&gt;","impl&lt;I:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='itertools/misc/struct.FlatTuples.html' title='itertools::misc::FlatTuples'>FlatTuples</a>&lt;I&gt;","impl&lt;I:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a>,&nbsp;F:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='itertools/struct.PadUsing.html' title='itertools::PadUsing'>PadUsing</a>&lt;I,&nbsp;F&gt;","impl&lt;I&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='itertools/struct.RcIter.html' title='itertools::RcIter'>RcIter</a>&lt;I&gt;","impl&lt;St:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a>,&nbsp;F:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='itertools/struct.Unfold.html' title='itertools::Unfold'>Unfold</a>&lt;St,&nbsp;F&gt;","impl&lt;'a,&nbsp;A&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='itertools/struct.Stride.html' title='itertools::Stride'>Stride</a>&lt;'a,&nbsp;A&gt;","impl&lt;I:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a>,&nbsp;J:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='itertools/struct.ZipEq.html' title='itertools::ZipEq'>ZipEq</a>&lt;I,&nbsp;J&gt;","impl&lt;T:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a>,&nbsp;U:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='itertools/struct.ZipLongest.html' title='itertools::ZipLongest'>ZipLongest</a>&lt;T,&nbsp;U&gt;","impl&lt;A:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a>,&nbsp;B:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='enum' href='itertools/enum.EitherOrBoth.html' title='itertools::EitherOrBoth'>EitherOrBoth</a>&lt;A,&nbsp;B&gt;","impl&lt;T:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='itertools/struct.Zip.html' title='itertools::Zip'>Zip</a>&lt;T&gt;","impl&lt;T:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a>,&nbsp;U:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='itertools/struct.ZipSlices.html' title='itertools::ZipSlices'>ZipSlices</a>&lt;T,&nbsp;U&gt;",];implementors["openzwave"] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='enum' href='openzwave/node/enum.NodeBasic.html' title='openzwave::node::NodeBasic'>NodeBasic</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='openzwave/node/struct.Node.html' title='openzwave::node::Node'>Node</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='enum' href='openzwave/notification/enum.NotificationCode.html' title='openzwave::notification::NotificationCode'>NotificationCode</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='enum' href='openzwave/notification/enum.ControllerState.html' title='openzwave::notification::ControllerState'>ControllerState</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='enum' href='openzwave/notification/enum.ControllerError.html' title='openzwave::notification::ControllerError'>ControllerError</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='enum' href='openzwave/value_classes/value_id/enum.ValueGenre.html' title='openzwave::value_classes::value_id::ValueGenre'>ValueGenre</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='enum' href='openzwave/value_classes/value_id/enum.ValueType.html' title='openzwave::value_classes::value_id::ValueType'>ValueType</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='openzwave_sys/value_classes/value_id/struct.ValueID.html' title='openzwave_sys::value_classes::value_id::ValueID'>ValueID</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='enum' href='openzwave/value_classes/value_id/enum.CommandClass.html' title='openzwave::value_classes::value_id::CommandClass'>CommandClass</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='openzwave/value_classes/value_id/struct.ValueID.html' title='openzwave::value_classes::value_id::ValueID'>ValueID</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='openzwave/controller/struct.Controller.html' title='openzwave::controller::Controller'>Controller</a>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
