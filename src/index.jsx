import React, { useState, useRef, useEffect, useCallback } from 'react';

/* ───────────────────────── injected styles ───────────────────────── */
const STYLE_ID = 'dympp-styles';
const CSS = `
.dympp{
  --dympp-base:#060E10;
  --dympp-surface:#0D1F22;
  --dympp-surface-muted:#002D38;
  --dympp-primary:#00B4C4;
  --dympp-secondary:#0083A0;
  --dympp-text:#FFFFFF;
  --dympp-text-muted:#3D7E88;
  --dympp-border:#0D2A30;
  --dympp-error:#EF4444;
  --dympp-error-surface:rgba(239,68,68,.10);
  --dympp-overlay:rgba(0,0,0,.48);
  --dympp-radius:8px;
  --dympp-font:'Inter','Helvetica Neue',Arial,sans-serif;
  --dympp-font-mono:'JetBrains Mono','Fira Mono',monospace;
  --dympp-ease:150ms ease-out;

  position:relative; display:inline-block;
  font-family:var(--dympp-font); color:var(--dympp-text);
  -webkit-tap-highlight-color:transparent;
}
.dympp *{box-sizing:border-box;}
.dympp-avatar{
  position:relative; width:100%; height:100%; border-radius:50%; overflow:hidden;
  background:var(--dympp-surface-muted); border:1px solid var(--dympp-border);
  display:flex; align-items:center; justify-content:center;
}
.dympp-avatar.is-cam{border-color:var(--dympp-primary);}
.dympp-avatar.is-filled{border:1.5px solid var(--dympp-primary);}
.dympp-img{width:100%; height:100%; object-fit:cover; display:block;}
.dympp-video{width:100%; height:100%; object-fit:cover; display:block; transform:scaleX(-1);}
.dympp-ph{color:var(--dympp-text-muted); display:flex;}

.dympp-veil{
  position:absolute; inset:0; border:none; cursor:pointer; gap:4px;
  background:rgba(6,14,16,.55); color:#fff; opacity:0; transition:opacity var(--dympp-ease);
  display:flex; flex-direction:column; align-items:center; justify-content:center;
  font-family:var(--dympp-font); font-size:12px; font-weight:500;
}
.dympp-avatar:hover .dympp-veil{opacity:1;}
.dympp:focus-within .dympp-veil{opacity:1;}

.dympp-fab{
  position:absolute; right:2px; bottom:2px; width:30%; max-width:48px; min-width:34px; aspect-ratio:1;
  border-radius:50%; border:3px solid var(--dympp-base); background:var(--dympp-primary);
  color:var(--dympp-base); cursor:pointer; display:flex; align-items:center; justify-content:center;
  transition:background var(--dympp-ease), transform var(--dympp-ease); padding:0;
}
.dympp-fab:hover{background:var(--dympp-secondary);}
.dympp-fab:active{transform:scale(.94);}
.dympp[data-disabled="true"] .dympp-fab{opacity:.4; cursor:not-allowed;}

.dympp-shutter{
  position:absolute; left:50%; bottom:-8px; transform:translateX(-50%);
  width:52px; height:52px; border-radius:50%; cursor:pointer; padding:0;
  border:3px solid var(--dympp-primary); background:var(--dympp-base);
  display:flex; align-items:center; justify-content:center; transition:transform var(--dympp-ease);
}
.dympp-shutter span{width:36px; height:36px; border-radius:50%; background:var(--dympp-primary); transition:background var(--dympp-ease);}
.dympp-shutter:hover span{background:var(--dympp-secondary);}
.dympp-shutter:active{transform:translateX(-50%) scale(.94);}

.dympp-close{
  position:absolute; top:2px; right:2px; width:30px; height:30px; border-radius:50%;
  border:none; background:var(--dympp-overlay); color:#fff; cursor:pointer;
  display:flex; align-items:center; justify-content:center; padding:0;
}

.dympp-menu{
  position:absolute; top:calc(100% + 10px); left:50%; transform:translateX(-50%); z-index:20;
  background:var(--dympp-surface); border:1px solid var(--dympp-border); border-radius:var(--dympp-radius);
  padding:6px; min-width:184px; box-shadow:0 8px 28px rgba(0,0,0,.4);
}
.dympp-menu button{
  display:flex; align-items:center; gap:10px; width:100%; border:none; background:transparent;
  color:var(--dympp-text); font-family:var(--dympp-font); font-size:14px; font-weight:500;
  padding:9px 10px; border-radius:6px; cursor:pointer; text-align:left; transition:background var(--dympp-ease);
}
.dympp-menu button:hover{background:var(--dympp-surface-muted);}
.dympp-menu button svg{color:var(--dympp-primary); flex:0 0 auto;}
.dympp-menu button.is-danger{color:var(--dympp-error);}
.dympp-menu button.is-danger svg{color:var(--dympp-error);}

.dympp-err{
  position:absolute; top:calc(100% + 10px); left:50%; transform:translateX(-50%); z-index:20;
  background:var(--dympp-error-surface); border:1px solid var(--dympp-error); color:var(--dympp-error);
  border-radius:6px; padding:8px 12px; font-size:12px; font-weight:500; white-space:nowrap; max-width:240px;
}
`;

let injected = false;
function injectStyles() {
  if (injected || typeof document === 'undefined') return;
  if (document.getElementById(STYLE_ID)) { injected = true; return; }
  const s = document.createElement('style');
  s.id = STYLE_ID;
  s.textContent = CSS;
  document.head.appendChild(s);
  injected = true;
}

/* ───────────────────────── icons ───────────────────────── */
const I = (p) => ({ width: p.s || 24, height: p.s || 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: p.w || 2, strokeLinecap: 'round', strokeLinejoin: 'round' });
const IcUser = (p) => <svg {...I(p)}><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>;
const IcPlus = (p) => <svg {...I(p)}><path d="M12 5v14M5 12h14" /></svg>;
const IcPencil = (p) => <svg {...I(p)}><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" /></svg>;
const IcUpload = (p) => <svg {...I(p)}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><path d="M17 8l-5-5-5 5" /><path d="M12 3v12" /></svg>;
const IcCamera = (p) => <svg {...I(p)}><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" /><circle cx="12" cy="13" r="3" /></svg>;
const IcTrash = (p) => <svg {...I(p)}><path d="M3 6h18" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>;
const IcX = (p) => <svg {...I(p)}><path d="M18 6 6 18M6 6l12 12" /></svg>;

/* ───────────────────────── component ───────────────────────── */
const DEFAULT_LABELS = {
  add: 'Add a profile photo',
  edit: 'Edit',
  upload: 'Upload photo',
  capture: 'Take photo',
  remove: 'Remove',
  cameraError: "Couldn't open the camera.",
  tooLarge: 'Image is too large.',
};

export default function ProfileImagePicker({
  value,
  defaultValue = null,
  onChange,
  size = 150,
  accept = 'image/*',
  maxSizeMB = 5,
  facingMode = 'user',
  quality = 0.92,
  disabled = false,
  labels: labelOverrides,
  className = '',
  onError,
  ...rest
}) {
  injectStyles();
  const labels = { ...DEFAULT_LABELS, ...labelOverrides };
  const isControlled = value !== undefined;
  const [inner, setInner] = useState(defaultValue);
  const src = isControlled ? value : inner;

  const [cam, setCam] = useState(false);
  const [menu, setMenu] = useState(false);
  const [err, setErr] = useState(null);

  const wrapRef = useRef(null);
  const fileRef = useRef(null);
  const videoRef = useRef(null);
  const streamRef = useRef(null);

  const commit = useCallback((next) => {
    if (!isControlled) setInner(next);
    onChange && onChange(next);
  }, [isControlled, onChange]);

  const fail = useCallback((msg, e) => { setErr(msg); onError && onError(e || new Error(msg)); }, [onError]);

  useEffect(() => {
    if (!menu && !err) return;
    const off = (e) => { if (wrapRef.current && !wrapRef.current.contains(e.target)) { setMenu(false); setErr(null); } };
    document.addEventListener('pointerdown', off, true);
    return () => document.removeEventListener('pointerdown', off, true);
  }, [menu, err]);

  const stopStream = useCallback(() => {
    if (streamRef.current) { streamRef.current.getTracks().forEach((t) => t.stop()); streamRef.current = null; }
  }, []);

  useEffect(() => {
    if (!cam) return;
    let cancelled = false;
    (async () => {
      try {
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) throw new Error('getUserMedia unsupported');
        const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode }, audio: false });
        if (cancelled) { stream.getTracks().forEach((t) => t.stop()); return; }
        streamRef.current = stream;
        if (videoRef.current) { videoRef.current.srcObject = stream; await videoRef.current.play().catch(() => {}); }
      } catch (e) {
        if (!cancelled) { fail(labels.cameraError, e); setCam(false); }
      }
    })();
    return () => { cancelled = true; stopStream(); };
  }, [cam, facingMode, fail, labels.cameraError, stopStream]);

  useEffect(() => stopStream, [stopStream]);

  const openFile = () => { setMenu(false); fileRef.current && fileRef.current.click(); };
  const onFile = (e) => {
    const f = e.target.files && e.target.files[0];
    e.target.value = '';
    if (!f) return;
    if (f.size > maxSizeMB * 1024 * 1024) { fail(labels.tooLarge); return; }
    const r = new FileReader();
    r.onload = () => commit(r.result);
    r.onerror = () => fail(labels.tooLarge, r.error);
    r.readAsDataURL(f);
  };

  const startCamera = () => { setMenu(false); setErr(null); setCam(true); };

  const capture = () => {
    const v = videoRef.current;
    if (!v || !v.videoWidth) return;
    const px = Math.round(size * (window.devicePixelRatio || 1) * 1.5);
    const c = document.createElement('canvas');
    c.width = px; c.height = px;
    const ctx = c.getContext('2d');
    const s = Math.min(v.videoWidth, v.videoHeight);
    const sx = (v.videoWidth - s) / 2, sy = (v.videoHeight - s) / 2;
    ctx.translate(px, 0); ctx.scale(-1, 1);
    ctx.drawImage(v, sx, sy, s, s, 0, 0, px, px);
    const data = c.toDataURL('image/jpeg', quality);
    setCam(false);
    commit(data);
  };

  const cancelCamera = () => setCam(false);
  const remove = () => { setMenu(false); commit(null); };

  const fabSize = Math.max(20, Math.round(size * 0.13));

  return (
    <div
      ref={wrapRef}
      className={`dympp ${className}`}
      data-disabled={disabled ? 'true' : 'false'}
      style={{ width: size, height: size }}
      {...rest}
    >
      <div className={`dympp-avatar${cam ? ' is-cam' : ''}${src && !cam ? ' is-filled' : ''}`}>
        {cam ? (
          <video ref={videoRef} className="dympp-video" playsInline muted />
        ) : src ? (
          <img src={src} alt="" className="dympp-img" />
        ) : (
          <span className="dympp-ph"><IcUser s={Math.round(size * 0.37)} w={1.5} /></span>
        )}

        {!cam && src && (
          <button type="button" className="dympp-veil" onClick={() => !disabled && setMenu(true)} aria-label={labels.edit}>
            <IcPencil s={22} /><span>{labels.edit}</span>
          </button>
        )}
      </div>

      {!cam ? (
        <button
          type="button"
          className="dympp-fab"
          style={{ width: fabSize + 18, height: fabSize + 18 }}
          disabled={disabled}
          onClick={() => !disabled && setMenu((m) => !m)}
          aria-label={src ? labels.edit : labels.add}
        >
          {src ? <IcPencil s={fabSize} w={2.25} /> : <IcPlus s={fabSize} w={2.25} />}
        </button>
      ) : (
        <>
          <button type="button" className="dympp-shutter" onClick={capture} aria-label={labels.capture}><span /></button>
          <button type="button" className="dympp-close" onClick={cancelCamera} aria-label="Cancel"><IcX s={16} w={2.25} /></button>
        </>
      )}

      {menu && !cam && (
        <div className="dympp-menu" role="menu">
          <button type="button" role="menuitem" onClick={openFile}><IcUpload s={18} />{labels.upload}</button>
          <button type="button" role="menuitem" onClick={startCamera}><IcCamera s={18} />{labels.capture}</button>
          {src && <button type="button" role="menuitem" className="is-danger" onClick={remove}><IcTrash s={18} />{labels.remove}</button>}
        </div>
      )}

      {err && <div className="dympp-err" role="alert">{err}</div>}

      <input ref={fileRef} type="file" accept={accept} style={{ display: 'none' }} onChange={onFile} />
    </div>
  );
}

/* ───────────────────────── legacy compat ───────────────────────── */
export function ProfileImage({
  defaultImage = null,
  returnImage,
  clearPreview = false,
  camera = false,
  styles = {},
  maxImgSize = 1048576,
  sizeErrorMsg = 'File size exceeds (1MB)',
  // ignored legacy props
  uploadBtnProps,
  cameraBtnProps,
  cancelBtnProps,
  takeBtnProps,
  isNotImgErrorMsg,
  ...rest
}) {
  const size = styles.width || styles.height || 150;
  const maxSizeMB = maxImgSize / (1024 * 1024);

  const [value, setValue] = useState(clearPreview ? null : (defaultImage || null));

  useEffect(() => {
    if (clearPreview) setValue(null);
  }, [clearPreview]);

  const handleChange = (dataUrl) => {
    setValue(dataUrl);
    if (returnImage instanceof Function) returnImage(dataUrl);
  };

  return (
    <ProfileImagePicker
      value={value}
      onChange={handleChange}
      size={size}
      maxSizeMB={maxSizeMB}
      labels={{ tooLarge: sizeErrorMsg }}
      {...rest}
    />
  );
}
