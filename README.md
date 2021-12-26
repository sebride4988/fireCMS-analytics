# fireCMS-analytics

 fireCMS의 analytics

## 특징

- 해당 서브모듈은 fireCMS-core가 필요합니다.

## 사용하는 법

`<FireCMSCore>`에 서비스를 추가해준다. 코드를 추가한다.

```typescript
import Analytics from 'fireCMS/analytics';

...

<FireCMSCore
  ...
  services={{
    analytics: Analytics,
  }}
>
  {props.children}
</FireCMSCore>

...
```
